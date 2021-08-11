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

  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/table',
    name: 'Admin',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/admin/table/index'),
        meta: { title: '用户管理', icon: 'el-icon-phone-outline' }
      },
      {
        path: 'auth',
        name: 'Auth',
        component: () => import('@/views/admin/auth/index'),
        meta: { title: '权限管理', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/admin/tree/index'),
        meta: { title: '日志管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/passenger',
    component: Layout,
    redirect: '/passenger/flight',
    name: 'Passenger',
    meta: { title: '旅客入口', icon: 'el-icon-user' },
    children: [
      {
        path: 'flight',
        name: 'Flight',
        component: () => import('@/views/passenger/flight/index'),
        meta: { title: '航班情况', icon: 'el-icon-s-promotion' }
      },
      {
        path: 'infect',
        name: 'Infect',
        component: () => import('@/views/passenger/infect/index'),
        meta: { title: '感染风险', icon: 'el-icon-warning' }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/passenger/map/index'),
        meta: { title: '旅客大屏', icon: 'el-icon-s-platform' }
      },
    ]
  },

  {
    path: '/crew',
    component: Layout,
    redirect: '/crew/flight',
    name: 'crew',
    meta: { title: '机组乘务入口', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'flight',
        name: 'Flight',
        component: () => import('@/views/crew/flight/index'),
        meta: { title: '出机情况', icon: 'form' }
      },
      {
        path: 'infect',
        name: 'Infect',
        component: () => import('@/views/crew/infect/index'),
        meta: { title: '感染风险', icon: 'el-icon-warning' }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/crew/map/index'),
        meta: { title: '机组乘务大屏', icon: 'el-icon-s-platform' }
      },
    ]
  },

  {
    path: '/service',
    component: Layout,
    redirect: '/service/work',
    name: 'service',
    meta: { title: '机场勤务入口', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'work',
        name: 'Work',
        component: () => import('@/views/service/work/index'),
        meta: { title: '出勤情况', icon: 'form' }
      },
      {
        path: 'infect',
        name: 'Infect',
        component: () => import('@/views/service/infect/index'),
        meta: { title: '感染风险', icon: 'el-icon-warning' }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/service/map/index'),
        meta: { title: '机场勤务大屏', icon: 'el-icon-s-platform' }
      },
    ]
  },

  {
    path: '/master',
    component: Layout,
    redirect: '/master/work',
    name: 'master',
    meta: { title: '机场勤务入口', icon: 'el-icon-s-custom' },
    children: [
      {
        path: 'work',
        name: 'Work',
        component: () => import('@/views/master/work/index'),
        meta: { title: '总体情况', icon: 'el-icon-s-data' }
      },
      {
        path: 'infect',
        name: 'Infect',
        component: () => import('@/views/master/infect/index'),
        meta: { title: '感染风险', icon: 'el-icon-warning' }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/master/map/index'),
        meta: { title: '机场大屏', icon: 'el-icon-s-platform' }
      },
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '历史数据', icon: 'el-icon-monitor' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/CSUliver/InternProject',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  },

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
