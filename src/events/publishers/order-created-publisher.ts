import { Publisher, OrderCreatedEvent, Subjects } from '@mytuts/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
