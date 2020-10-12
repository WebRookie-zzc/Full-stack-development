# java 

## java 中方法的重载

同一个类中的多个方法，功能相同，只要**参数列表不同**，方法名就可以相同

### 重载的实现要求：

- 同一个类中的方法
- 方法名相同
- 参数列表不同 (或者说 ： 方法签名不同）

下面是一个函数重载的例子

```java
public class java {
    public static getSum(int a,. double b){
        //函数体
    }
    public static getSum(double a, int b){
        //函数体
    }
}
```

### 方法签名

对于一个方法

```java
public static void getSum(int a, int b){
    //函数体
}
```

他的方法签名为

```java
public static void getsum(int a, int b)
```

方法签名是定位一个类中方法的唯一

注意：

- 方法的重载与