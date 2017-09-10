import { User } from './user';
import * as moment from 'moment';
export class Form{
	id?: number
	type: string
	dt: string = moment().format('YYYY-MM-DDTHH:mm');
	savedBy: User
	patientId: number
	data?: any = {}
}