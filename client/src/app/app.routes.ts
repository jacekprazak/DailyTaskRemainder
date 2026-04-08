import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemeberList } from '../features/members/memeber-list/memeber-list';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { Messages } from '../features/messages/messages';
import { Lists } from '../features/lists/lists';
import { authGuard } from '../core/guards/auth-guard';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerError } from '../shared/errors/server-error/server-error';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'members', component: MemeberList },
            { path: 'members/:id', component: MemberDetailed },
            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },
        ]
    },
    { path: 'server-error', component: ServerError },
    { path: '**', component: NotFound }
];
