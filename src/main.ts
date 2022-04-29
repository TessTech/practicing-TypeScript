import { functionOne } from './functionOne';
import { functionTwo } from './functionTwo';
import { elseStatement } from './elseStatement';

var num: number = 2;

if ((num = 1)) {
  functionOne();
}
if ((num = 2)) {
  functionTwo();
} else {
  elseStatement();
}
