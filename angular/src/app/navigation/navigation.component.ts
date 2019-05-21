import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Menu} from '../target/menu';

@Component({
    selector: 'yz-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less'],
})
export class NavigationComponent implements OnInit {

    menus: Array<Menu>;

    private currentShowParentMenu: Menu;

    constructor(private router: Router) {
        this.menus = [];

        // Dashboard
        this.menus.push(new Menu('Dashboard', 'dashboard', [], '<span class="label label-success pull-right">V.1</span>'));

        // Analytics
        this.menus.push(new Menu('Analytics', 'analytics', [], '<span class="label label-warning pull-right">NEW</span>'));

        // Interface
        const interfaces = [];
        interfaces.push(new Menu('Panels design', 'interface/panels'));
        interfaces.push(new Menu('Typography', 'interface/typography'));
        interfaces.push(new Menu('Colors & Buttons', 'interface/buttons'));
        interfaces.push(new Menu('Components', 'interface/components'));
        interfaces.push(new Menu('Alerts', 'interface/alerts'));
        interfaces.push(new Menu('Modals', 'interface/modals'));
        interfaces.push(new Menu('Loading buttons', 'interface/loading_buttons'));
        interfaces.push(new Menu('Draggable Panels', 'interface/draggable_panels'));
        interfaces.push(new Menu('Code editor', 'interface/code_editor'));
        interfaces.push(new Menu('Email template', 'interface/email_template'));
        interfaces.push(new Menu('List', 'interface/list'));
        interfaces.push(new Menu('Tour', 'interface/tour'));
        interfaces.push(new Menu('Icons library', 'interface/icons'));
        this.menus.push(new Menu('Interface', 'interface', interfaces));

        // App views
        const appViews = [];
        appViews.push(new Menu('Contacts', 'app_views/contacts'));
        appViews.push(new Menu('Projects', 'app_views/projects'));
        appViews.push(new Menu('Project detail', 'app_views/project_detail'));
        appViews.push(new Menu('App plans', 'app_views/app_plans'));
        appViews.push(new Menu('Social board', 'app_views/social_board'));
        appViews.push(new Menu('FAQ', 'app_views/faq'));
        appViews.push(new Menu('Timeline', 'app_views/timeline'));
        appViews.push(new Menu('Notes', 'app_views/notes'));
        appViews.push(new Menu('Mailbox', 'app_views/mailbox'));
        appViews.push(new Menu('Email compose', 'app_views/email_compose'));
        appViews.push(new Menu('Email view', 'app_views/email_view'));
        appViews.push(new Menu('Profile', 'app_views/profile'));
        appViews.push(new Menu('Blog', 'app_views/blog'));
        appViews.push(new Menu('Blog article', 'app_views/blog_details'));
        appViews.push(new Menu('Forum', 'app_views/forum'));
        appViews.push(new Menu('Forum details', 'app_views/forum_details'));
        appViews.push(new Menu('Gallery', 'app_views/gallery'));
        appViews.push(new Menu('Calendar', 'app_views/calendar'));
        appViews.push(new Menu('Invoice', 'app_views/invoice'));
        appViews.push(new Menu('File manager', 'app_views/file_manager'));
        appViews.push(new Menu('Chat view', 'app_views/chat_view'));
        appViews.push(new Menu('Search view', 'app_views/search'));
        this.menus.push(new Menu('App views', 'app_views', appViews));

        // Charts
        const charts = [];
        charts.push(new Menu('ChartJs', 'charts/chartjs'));
        charts.push(new Menu('Flot charts', 'charts/flot'));
        charts.push(new Menu('Inline graphs', 'charts/inline'));
        charts.push(new Menu('Chartist', 'charts/chartist'));
        charts.push(new Menu('C3 Charts', 'charts/c3Charts'));
        this.menus.push(new Menu('Charts', 'charts', charts));

        // Box Transitions
        const transitions = [];
        transitions.push(new Menu('Overview', 'transitions/overview', [], '<span class="label label-success pull-right">Start</span>'));
        this.menus.push(new Menu('Box transitions', 'transitions', transitions));

        // Common views
        const commonViews = [];
        commonViews.push(new Menu('Login', 'common/login'));
        commonViews.push(new Menu('Register', 'common.register'));
        this.menus.push(new Menu('Common views', 'common', commonViews));

        // Tables
        const tables = [];
        tables.push(new Menu('Tables design', 'tables/tables_design'));
        tables.push(new Menu('Data tables', 'tables/datatables'));
        tables.push(new Menu('ngGrid', 'tables/ng_grid'));
        tables.push(new Menu('Foo table', 'tables/footable'));
        this.menus.push(new Menu('Tables', 'tables', tables));

        // Forms
        const forms = [];
        forms.push(new Menu('Forms elements', 'forms/forms_elements'));
        forms.push(new Menu('Forms extended', 'forms/forms_extended'));
        forms.push(new Menu('Text editor', 'forms/text_editor'));
        forms.push(new Menu('Wizard', 'forms/wizard'));
        forms.push(new Menu('Validation', 'forms/validation'));
        this.menus.push(new Menu('Forms', 'forms', forms));
    }

    ngOnInit() {
    }

    /**
     * 路由导航
     * @param menu 菜单
     */
    navigate(menu: Menu): void {
        if (menu.children.length === 0) {
            // noinspection JSIgnoredPromiseFromCall
            this.router.navigateByUrl(menu.url);
        } else {
            this.currentShowParentMenu = menu;
        }
    }

    /**
     * 当前菜单是否激活
     * @param menu 菜单
     */
    active(menu: Menu): boolean {
        const currentUrl = this.router.url;
        return currentUrl.includes(menu.url);
    }

    /**
     * 是否显示子菜单
     * @param menu 菜单
     */
    showChildren(menu: Menu): boolean {
        if (this.currentShowParentMenu) {
            return menu.url === this.currentShowParentMenu.url;
        }
        return false;
    }
}
