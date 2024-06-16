// ts. Method decorator
export function LogMethod(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  /*
  target - Объект, к которому принадлежит метод (class TaskService)
  propertyKey - Название метода
  */
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with arguments:`, args);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}
