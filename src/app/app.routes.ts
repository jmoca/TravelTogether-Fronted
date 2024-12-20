  import { Routes } from '@angular/router';

  export const routes: Routes = [
    {
      path: 'home',
      loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },

    {
      path :'activity/:id',
      loadComponent: () => import('./activity/activity.component').then((m) => m.ActivityComponent),
    },
    {
      path :'calendar',
      loadComponent: () => import('./calendar/calendar.component').then((m) => m.CalendarComponent),
    },
    {
      path :'chat',
      loadComponent: () => import('./chat/chat.component').then((m) => m.ChatComponent),
    },
    {
      path :'footer',
      loadComponent: () => import('./footer/footer.component').then((m) => m.FooterComponent),
    },
    {
      path :'group',
      loadComponent: () => import('./group/group.component').then((m) => m.GroupComponent),
    },
    {
      path :'login',
      loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    },
    {
      path :'navbar',
      loadComponent: () => import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    },
    {
      path :'new_activity/:id',
      loadComponent: () => import('./new-activity/new-activity.component').then((m) => m.NewActivityComponent),
    },
    {
      path :'settings-group/:id',
      loadComponent: () => import('./settings-group/settings-group.component').then((m) => m.SettingsGroupComponent),
    },
    {
      path :'menu',
      loadComponent: () => import('./menu/menu.component').then((m) => m.MenuComponent),
    },
    {
      path: 'registration',
      loadComponent: () => import('./registration/registration.component').then((m) => m.RegistrationComponent),
    },

    {
      path: 'perfil-user',
      loadComponent: () => import('./perfil-user/perfil-user.component').then((m) => m.PerfilUserComponent),
    },
    {
      path: 'new-group',
      loadComponent: () => import('./new-group/new-group.component').then((m) => m.NewGroupComponent),
    },
    {
      path: 'add-users-group/:id',
      loadComponent: () => import('./add-users-group/add-users-group.component').then((m) => m.AddUsersGroupComponent),
    },
    {
      path: 'add-friends',
      loadComponent: () => import('./add-friends/add-friends.component').then((m) => m.AddFriendsComponent),
    }


  ];
