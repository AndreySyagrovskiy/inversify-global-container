import getDecorators from "inversify-inject-decorators";
import {container} from "./container";
import { Container, interfaces } from 'inversify';



export const inject = getDecorators(container).lazyInject;