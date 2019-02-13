import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'jobFilter',
  pure: false
})

export class JobFilterPipe implements PipeTransform {
  transform(jobs: any, searchTerm: string): any {
    if (!jobs || !searchTerm) {
      return jobs;
    }

    return jobs.filter(job => job.body.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
