# sass、less

## 变量

sass用```$```定义变量，less用```@```

```scss
$number: 100px;
.box {
    width: $number;
}
```

```less
@number: 100px;
.box {
    width: @number;
}
```

## 插值

sass用```#{$keyname}``` less用 ```@{keyname}```

```scss
$number: 100px;
$key: margin;
.box {
    #{$key}: $number;
}
```

```less
@number: 100px;
@key: margin;
.box {
    @{key}: @number;
}
```

插值也可以用在类名中

```scss
$number: 100px;
$key: margin;
$i: 1;
.box#{$i} {
    #{$key}: $number;
}
```

```css
.box1 {
  margin: 100px;
}
```

## 作用域

他们都有就近原则。但是sass没有变量提升，less有

对比下面sass和less的代码

```scss
$number: 100px;
.box {
    width: $number;
    $number: 200px;
    height: $number;
}
```

```css
.box {
  width: 100px;
  height: 200px;
}
```

```less
@number: 100px;
.box {
    width: @number;
    @number: 200px;
    height: @number;
}
```

```css
.box {
  width: 200px;
  height: 200px;
}
```

## 嵌套

sass和less嵌套是一样的

```scss
div {
    li {
        img {width: 100px;}
    }
    button {
        outline: none;
    }
}
```

```less
div {
    li {
        img {width: 100px;}
    }
    button {
        outline: none;
    }
}
```

```css
div li img {
  width: 100px;
}

div button {
  outline: none;
}
```

### 伪类嵌套

伪类嵌套需要前面加```&``` 例如 ```&:hover{}```

```scss
div{
    &:hover{
        color: #f40;
    }
}
```

```css
div:hover {
  color: #f40;
}
```

### 属性嵌套

less 是没有属性嵌套的

```scss
div {
    font:{
        size: 20px;
        weight: bold;
    }
}
```

```css
div {
  font-size: 20px;
  font-weight: bold;
}
```

## 运算

```scss
$num: 100px;
.box{
    width: $num * 3;
}
```

```less
@num: 100px;
.box {
    width: @num *3;
}
```

```css
.box {
  width: 300px;
}
```

在sass中，不同的单位之间是不能进行运算的，而在less中，如果运算的单位同，那么他们就进行数值的运算，最后的单位取前面那个数字的单位

### ```/```运算

```/``` 可以看成除法运算，也可以看成分隔符 例如 ```font: 字号 / 行高```

在sass中，```/```默认的认为是分隔符，如果要进行除法运算，就要用小括号括起来,如果是变量的话，/就是除法运算

在less中，font中的/被解释成分隔符，而padding中的/被解释成除法运算,如果要进行分割，那么就用 ```~""``` 括起来 

```scss
$number: 20px;
.box {
    font: 20px / 1.5;
    padding: 20px / 1.5;
    margin: ($number / 2);
}
```

```less
@number: 20px;
.box {
    font: @number / 1.5;
    padding: ~"20px / 1.5";
    margin: @number / 2;
}
```

```css
.box {
  font: 20px / 1.5;
  padding: 20px / 1.5;
  margin: 10px;
}
```

颜色也是可以进行运算的 (less和sass相同)

```scss
.box {
    color: #010101 * 2;
}
```

```css
.box {
    color: #020202;
}
```

## 函数

### 内置函数

### 自定义函数

sass用@进行自定义函数，注意形参一定要加上```$```,返回值是 ```@return``` 不要漏了```@```

```scss
@function sum($a, $b){
    @return $a + $b;
}
.box {
    width: sum(4px, 5px);
}
```

todo: less函数

## 混入

### less混入

```less
.hide {
    display: none;
    opacity: 0;
}

.box {
    .hide;
}
```

```css
.hide {
  display: none;
  opacity: 0;
}
.box {
  display: none;
  opacity: 0;
}
```

如果不想让.hide 独立存在，我们就用添加一个小括号


```less
.hide() {
    display: none;
    opacity: 0;
}

.box {
    .hide();
}
```

```css
.box {
  display: none;
  opacity: 0;
}
```


小括号里还可以进行传参

```less
.hide(@color) {
    display: none;
    opacity: 0;
    color: @color;
}

.box {
    .hide(blue);
}
```

### sass混入

sass混入用的是 ```@mixin name``` 和 ```@include name```

```scss
@mixin hide {
    display: none;
}

.box {
    @include hide;
}
```

sass也可以用小括号进行传参

```scss
@mixin color($color){
    color: $color;
}

.box {
    @include color(red);
}
```

## 命名空间

只有less有命名空间，sass是没有命名空间的

命名空间用```#name```

```less
.show() {
    display: flex;
}

#sky() {
    .show(){
        display: block;
    }
}

.box1 {
    .show();
}

.box2 {
    #sky.show();
}
```

```css
.box1 {
  display: flex;
}
.box2 {
  display: block;
}
```

## 继承

### less继承

less继承用 ```&:extend(.name)```

```less
.hide {
    display: none;
}

.box1 {
    &:extend(.hide);
}

.box2 {
    &:extend(.hide);
    color: red;
}
```

```css
.hide,
.box1,
.box2 {
  display: none;
}
.box2 {
  color: red;
}
```

### sass 继承

sass 用 ```@extend .name``` 或者 ```@extend %name``` 来继承

```scss
.hide {
    display: none;
}

.box {
    @extend .hide;
}
```

```css
.hide, .box {
  display: none;
}
```

如果不想让hide单独存在，我们将```/.``换成 ```%``` 即可

```scss
%hide {
    display: none;
}

.box {
    @extend %hide;
}
```

```css
.box {
  display: none;
}
```

## 合并

### less

+ ---> ,
+_ ---> 空格

```less
.box {
    background+: url(a.jpg);
    background+: url(b.jpg);

    transform+_: scale(.3);
    transform+_: translateX(1px);
}
```

```css
.box {
  background: url(a.jpg), url(b.jpg);
  transform: scale(0.3) translateX(1px);
}
```

# sass

sass要用到键值对和map-values内置函数

```scss
$background: (
    a: url(1.jpg),
    b: url(2.jpg)
);

$transform: (
    a: scale(.5),
    b: translateX(10px)
);

.box {
    background: map-values($background);
    transform: zip(map-values($transform));
}
```

```css
.box {
  background: url(1.jpg), url(2.jpg);
  transform: scale(0.5), translateX(10px);
}
```

## 媒体查询

sass和less的媒体查询是相同的

```scss
.box {
    width: 100px;
    @media screen and (min-width: 768px){
        width: 600px;
    }
    @media screen and (min0-width: 1440px){
        width: 900px;
    }
}
```

```css
.box {
  width: 100px;
}

@media screen and (min-width: 768px) {
  .box {
    width: 600px;
  }
}

@media screen and (min0-width: 1440px) {
  .box {
    width: 900px;
  }
}
```

## 条件

### less

```less
@count: 5;

.get(@cn) when ( @cn > 4 ){
    width: 100px;
}
.get(@cn) when ( @cn <= 4 ){
    width: 200px;
}

.box1 {
    .get(3);
}
.box2 {
    .get(6);
}
```

```css
.box1 {
  width: 200px;
}
.box2 {
  width: 100px;
}
```

### sass

```scss
$count: 5;

.box {
    @if($count > 4){
        width: 100px;
    }
    @else if($count >6){
        width: 200px;
    }
    @else{
        width: 300px;
    }
}
```

## 循环

### less

用递归实现循环

```less
@count: 3;

.get(@cn) when (@cn < 3){
    .box-@{cn} {
        width: 100px + @cn;
    }
    .get(@cn+1);
}

.get(0);
```

```css
.box-0 {
  width: 100px;
}
.box-1 {
  width: 101px;
}
.box-2 {
  width: 102px;
}
```

### sass

sass 用@for from through  

注意： 循环是包含through后面的数的

```scss
@for $i from 0 through 3{
    box-#{$i}{
        width: 100px + $i;
    }
}
```

```css
box-0 {
  width: 100px;
}

box-1 {
  width: 101px;
}

box-2 {
  width: 102px;
}

box-3 {
  width: 103px;
}
```

## 导入

scss 和 less 是一样的

```scss
@import '路径'
```