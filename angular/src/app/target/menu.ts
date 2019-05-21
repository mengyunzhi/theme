/**
 * 菜单实体
 */
export class Menu {
    name: string;              // 菜单名
    url: string;               // 路由
    children: Array<Menu>;     // 子菜单
    label: string;             // 菜单标签

    constructor(name: string, url: string, children: Array<Menu> = [], label: string = '') {
        this.name = name;
        this.url = url;
        this.children = children;
        this.label = label;
    }
}
