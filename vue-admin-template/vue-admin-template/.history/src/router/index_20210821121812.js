import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
  path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '历史数据', icon: 'el-icon-monitor' }
  //     }
  //   ]
  // },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/CSUliver/InternProject',
        meta: { title: '项目链接', icon: 'el-icon-share' }
      }
    ]
  },

  
]

/**
 * asyncRoutes
 * 只有拥有权限的用户，才能显示的路由表
 */
 export const asyncRoutes = [
  
      // path: '/admin',
      // component: Layout,
      // redirect: '/admin/table',
      // name: 'Admin',
      // meta: { title: '系统管理', icon: 'el-icon-s-help', roles: ['admin'] },
      // children: [
      //   {
      //     path: 'auth',
      //     name: 'Auth',
      //     component: () => import('@/views/admin/auth/index'),
      //     meta: { title: '用户权限管理', icon: 'table', roles: ['admin'] }
      //   },
        // {
        //   path: 'tree',
        //   name: 'Tree',
        //   component: () => import('@/views/admin/tree/index'),
        //   meta: { title: '日志管理', icon: 'tree', roles: ['admin'] }
        // }
    //   ]
    // },
  
    {
      path: '/passenger',
      component: Layout,
      redirect: '/passenger/flight',
      name: 'Passenger',
      meta: { title: '旅客入口', icon: 'el-icon-user', roles: ['admin','passenger'] },
      children: [
        {
          path: 'flight',
          name: '',
          component: () => import('@/views/passenger/flight/index'),
          meta: { title: '航班信息查询', icon: 'el-icon-s-promotion', roles: ['admin','passenger'] }
        },
        {
          path: 'takeflight',
          name: '',
          component: () => import('@/views/passenger/takeflight/index'),
          meta: { title: '飞机搭载人员信息', icon: 'el-icon-s-promotion', roles: ['admin','passenger'] }
        },
        {
          path: 'infect',
          name: '',
          component: () => import('@/views/passenger/infect/index'),
          meta: { title: '感染警示', icon: 'el-icon-warning', roles: ['admin','passenger'] }
        },
        {
          path: 'map',
          name: '',
          component: () => import('@/views/passenger/map/index'),
          meta: { title: '旅客大屏', icon: 'el-icon-s-platform', roles: ['admin','passenger'] }
        },
      ]
    },
  
    {
      path: '/crew',
      component: Layout,
      redirect: '/crew/flight',
      name: 'crew',
      meta: { title: '机组人员入口', icon: 'el-icon-user-solid', roles: ['admin','flight'] },
      children: [
        {
          path: 'flight',
          name: '',
          component: () => import('@/views/crew/flight/index'),
          meta: { title: '航班信息查询', icon: 'el-icon-s-promotion', roles: ['admin','flight'] }
        },
        {
          path: 'takeflight',
          name: '',
          component: () => import('@/views/crew/takeflight/index'),
          meta: { title: '飞机搭载人员信息', icon: 'el-icon-s-promotion', roles: ['admin','flight'] }
        },
        {
          path: 'infect',
          name: '',
          component: () => import('@/views/crew/infect/index'),
          meta: { title: '感染警示', icon: 'el-icon-warning', roles: ['admin','flight'] }
        },
        {
          path: 'map',
          name: '',
          component: () => import('@/views/crew/map/index'),
          meta: { title: '机组人员大屏', icon: 'el-icon-s-platform', roles: ['admin','flight'] }
        },
      ]
    },
  
    {
      path: '/service',
      component: Layout,
      redirect: '/service/task',
      name: 'service',
      meta: { title: '机场工作人员入口', icon: 'el-icon-s-check', roles: ['admin','airport'] },
      children: [
        {
          path: 'task',
          name: '',
          component: () => import('@/views/service/task/index'),
          meta: { title: '出勤任务表', icon: 'el-icon-date', roles: ['admin','airport'] }
        },
        {
          path: 'taskfinish',
          name: '',
          component: () => import('@/views/service/taskfinish/index'),
          meta: { title: '出勤任务执行信息', icon: 'form', roles: ['admin','airport'] }
        },
        {
          path: 'infect',
          name: '',
          component: () => import('@/views/service/infect/index'),
          meta: { title: '感染警示', icon: 'el-icon-warning', roles: ['admin','airport'] }
        },
        {
          path: 'map',
          name: '',
          component: () => import('@/views/service/map/index'),
          meta: { title: '机场工作人员大屏', icon: 'el-icon-s-platform', roles: ['admin','airport'] }
        },
      ]
    },
  
    {
      path: '/master',
      component: Layout,
      redirect: '/master/monitor',
      name: 'master',
      meta: { title: '机场管理员入口', icon: 'el-icon-s-custom', roles: ['admin'] },
      children: [
        {
          path: 'auth',
          name: 'Auth',
          component: () => import('@/views/admin/auth/index'),
          meta: { title: '用户权限管理', icon: 'table', roles: ['admin'] }
        },
        {
          path: 'monitor',
          name: '',
          component: () => import('@/views/master/monitor/index'),
          meta: { title: '监测点管理', icon: 'el-icon-map-location', roles: ['admin'] }
        },
        {
          path: 'monitordata',
          name: '',
          component: () => import('@/views/master/monitordata/index'),
          meta: { title: '监测数据', icon: 'el-icon-video-camera', roles: ['admin'] }
        },
        {
          path: 'task',
          name: '',
          component: () => import('@/views/master/task/index'),
          meta: { title: '出勤任务表管理', icon: 'el-icon-date', roles: ['airport'] }
        },
        {
          path: 'taskfinish',
          name: '',
          component: () => import('@/views/master/taskfinish/index'),
          meta: { title: '出勤任务执行信息管理', icon: 'form', roles: ['admin'] }
        },
        {
          path: 'risk',
          name: '',
          component: () => import('@/views/master/risk/index'),
          meta: { title: '实时感染风险', icon: 'el-icon-warning-outline', roles: ['admin'] }
        },
        {
          path: 'infect',
          name: '',
          component: () => import('@/views/master/infect/index'),
          meta: { title: '感染警示', icon: 'el-icon-warning', roles: ['admin'] }
        },
        {
          path: 'map',
          name: '',
          component: () => import('@/views/master/map/index'),
          meta: { title: '机场大屏', icon: 'el-icon-s-platform', roles: ['admin'] }
        },
      ]
    },

  //   {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: '权限',
  //     icon: 'lock',
  //     roles: ['机场管理员'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/form/index'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: '权限页面',
  //         roles: ['机场管理员'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/form/index'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: '权限控制'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/form/index'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: '角色权限',
  //         roles: ['机场管理员']
  //       }
  //     }
  //   ]
  // }
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
