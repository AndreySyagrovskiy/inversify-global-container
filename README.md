inversify-global-container
==========================

If you want have one container of inversify js in your project you can use this package.

Installation
------------

```bash
npm install inversify-global-container --save

```

Using
------

src/events/services/event.service.ts
```ts
    import { injectable } from 'inversify';
    @injectable()
    export class EventService
    {
    }
```

src/events/key.config.ts
```ts
export const EVENTS_ISK = {
    EventApiS: Symbol('events.EventsApiService'),
    EventS: Symbol('events.EventsService'),
};
```

src/events/inversify.config.ts
```ts
    import { EventService } from './services/event.service';
    import { ContainerModule, interfaces } from 'inversify';
    import { EVENTS_ISK } from './key.config';

    export const EVENTS_ISM = new ContainerModule((bind: interfaces.Bind) => {
        bind<EventService>(EVENTS_ISK.EventS).to(EventService);
    });
```

src/app.ts
```ts
    import { container }     from 'inversify-global-container';
    import { EVENTS_ISK }    from './events/key.config';
    import { EventService }  from './events/services/event.service';
    import { EVENTS_ISM }    from './events/inversify.config';
    import { inject }        from 'inversify-global-container';

    container.load(
        EVENTS_ISM,
    );


    class SomeObject
    {
        inject(EVENTS_ISK.EventS) eventService: EventService;
    }

    let someObject = new SomeObject();
    console.log(someObject.eventService);

```