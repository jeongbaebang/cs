// 인터페이스 정의
interface IService {
  performTask(): void;
}

// 하위 모듈 구현 #1
class ServiceA implements IService {
  performTask(): void {
    console.log('ServiceA: Task is being performed');
  }
}

// 하위 모듈 구현 #2
class ServiceB implements IService {
  performTask(): void {
    console.log('ServiceB: Task is being performed');
  }
}

// DI Container
class DIContainer {
  private services: Map<string, IService> = new Map();

  register(serviceName: string, service: IService): void {
    this.services.set(serviceName, service);
  }

  get(serviceName: string): IService | undefined {
    return this.services.get(serviceName);
  }
}

// 메인 모듈
class MainModule {
  private service: IService;

  constructor(service: IService) {
    this.service = service;
  }

  run(): void {
    this.service.performTask();
  }
}

// 의존성 주입자를 생성하고 서비스 등록
const container = new DIContainer();
container.register('serviceA', new ServiceA());
container.register('serviceB', new ServiceB());

// 메인 모듈에 의존성을 주입
const serviceA = container.get('serviceA');
if (serviceA) {
  const app = new MainModule(serviceA);
  app.run(); // "ServiceA: Task is being performed"
}

const serviceB = container.get('serviceB');
if (serviceB) {
  const app = new MainModule(serviceB);
  app.run(); // "ServiceB: Task is being performed"
}
