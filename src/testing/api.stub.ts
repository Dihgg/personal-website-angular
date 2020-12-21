import { Observable, of } from 'rxjs';
import { Skill } from 'src/app/types/skill.type';
import { Work } from 'src/app/types/work.type';
import { Mock } from './mock';

export class ApiStub {
    constructor() { }

    public getSkills(): Observable<Skill[]> {
        return of<Skill[]>(Mock.Skills());
    }

    public getWorks(): Observable<Work[]> {
        return of<Work[]>(Mock.Works());
    }
}
