import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"project-list",
        pathMatch:'full'
    },
    {
        path:'project-list',
        component: ProjectListComponent,
        title:'All Projects'
    },
    {
        path:'new-project',
        component:NewProjectComponent,
        title: 'New_project'
    }
];
