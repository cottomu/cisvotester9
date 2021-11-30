<?php
// +----------------------------------------------------------------------
// | 路由设置
// +----------------------------------------------------------------------

return [

    ##############################################

    // 是否显示入口文件[index.php]，true：显示，false：隐藏
    // 隐藏入口文件需要先配置URL重写，请参考如下文档
    // https://www.kancloud.cn/manual/thinkphp6_0/1037488
    'url_show_root'         => true,

    // 强制https
    'url_force_https'       => false,

    ##############################################

    // pathinfo分隔符
    'pathinfo_depr'         => '/',
    // URL伪静态后缀
    'url_html_suffix'       => '',
    // URL普通方式参数 用于自动生成
    'url_common_param'      => true,
    // 是否开启路由延迟解析
    'url_lazy_route'        => false,
    // 是否强制使用路由
    'url_route_must'        => false,    // true false
    // 合并路由规则
    'route_rule_merge'      => false,
    // 路由是否完全匹配
    'route_complete_match'  => false,
    // 访问控制器层名称
    'controller_layer'      => 'controller',
    // 空控制器名
    'empty_controller'      => 'Error',
    // 是否使用控制器后缀
    'controller_suffix'     => false,
    // 默认的路由变量规则
    'default_route_pattern' => '[\w\.]+',
    // 是否开启请求缓存 true自动缓存 支持设置请求缓存规则
    'request_cache_key'     => false,
    // 请求缓存有效期
    'request_cache_expire'  => null,
    // 全局请求缓存排除规则
    'request_cache_except'  => [],
    // 默认控制器名
    'default_controller'    => 'Index',
    // 默认操作名
    'default_action'        => 'index',
    // 操作方法后缀
    'action_suffix'         => '',
    // 默认JSONP格式返回的处理方法
    'default_jsonp_handler' => 'jsonpReturn',
    // 默认JSONP处理方法
    'var_jsonp_handler'     => 'callback',
];
