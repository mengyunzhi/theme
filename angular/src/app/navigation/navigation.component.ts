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
        this.menus.push(new Menu('Interface', '', interfaces));
    }

    ngOnInit() {
    }

    /**
     * 路由导航
     * @param menu 菜单
     */
    navigate(menu: Menu) {
    }
}
