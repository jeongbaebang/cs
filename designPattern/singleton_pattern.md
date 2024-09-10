#### 싱글톤 패턴 (singleton pattern)

하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴

장점: 인스턴스를 생성할 때 드는 비용이 줄어든다.

단점: 의존성이 높아진다 (DIP 원칙(의존성 역전))을 통해서 의존성을 낮출수있다.

> 인스턴스 비용이 많이 들 때 고려해 볼 수 있는 패턴

```ts
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  getInstance() {
    return this;
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
```

#### 의존성 문제 해결방법 (DI)

싱글톤 패턴은 실용적이지만 모듈 간의 결합을 강하게 만들 수 있다는 단점이 존재한다.

이때 의존성 주입(DI, Dependency Injection)을 통해 모듈간의 결합을 조금 더 느슨하게 만들어 해결이 가능하다.

상위 모듈은 하위 모듈에 대한 의존성이 떨어지게 된다 == '디커플링이 된다'

#### 의존성 역전 원칙 (DIP)

구현체에 의존하지 않고 인터페이스나 추상클래스를 통해 의존성 주입 (추상화 의존)

[DIP](./DI.ts)
