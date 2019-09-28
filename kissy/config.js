
KISSY.config("base", 'http://127.0.0.1:8080/');

KISSY.config('modules', {
    "a": {
        // "a" 模块的依赖信息
        requires: ["b", "d"]
    },
    "b": {
        // "b" 模块的依赖信息
        requires: ['c', 'e']
    },
});

