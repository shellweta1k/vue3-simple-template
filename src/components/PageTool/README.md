# 页面工具

为了减少重复工作，封装一个含搜索表单的组件
需要传入两个参数

1. formValue

```
type formValue = {
    [key: string]: any
}
```

2. formItems
   **formItem 中的 key 需要和 formValue 中的 key 对应**

```
type formItem = {
    key: string;
    label: string;
    type: string;
    placeholder: string;
    [key: string]: any;
    config: {
        [key: string]: any;
    };
}
type formItems = Array<formItem>
```
