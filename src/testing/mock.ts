import { Skill } from 'src/app/types/skill.type';
import { Work } from 'src/app/types/work.type';

export class Mock {
    static Skill(source?: Skill): Skill {
        return source || {
            id: 99,
            name: 'mock',
            color: 'ffffff',
            icon: 'icon'
        };
    }

    static Skills(len = 1, source?: Skill): Skill[] {
        return new Array<Skill>(len)
            .fill(Mock.Skill(source));
    }

    static Work(source?: Work): Work {
        return source || {
            id: 99,
            workplace: 'mock',
            job_title: 'mock',
            image: 'image.png',
            year_in: 2019,
            year_out: 2020
        };
    }

    static Works(len = 1, source?: Work): Work[] {
        return new Array<Work>(len)
            .fill(Mock.Work(source));
    }
}
