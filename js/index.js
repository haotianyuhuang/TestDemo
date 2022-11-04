class Vue {
    constructor(instance) {
        this.$data = instance.data;
        Observer(this.$data);
        Compile(instance.el, this);
    }
}

function Observer(instance) {
    if (!instance || typeof instance !== "object") return;
    Object.keys(instance).forEach(key => {
        let value = instance[key];
        Observer(value);
        Object.defineProperty(instance, key, {
            enumerable: true,
            configurable: true,
            get() {
                // console.log(`访问了${key}属性，值为：${value}`);
                return value;
            },
            set(newValue) {
                // console.log(`${key}属性的值由${value}修改为${newValue}`);
                value = newValue;
                Observer(newValue);
            }
        })
    })
}

function Compile(el, instance) {
    instance.$el = document.querySelector(el);
    const fragment = document.createDocumentFragment();
    let child;
    while (child = instance.$el.firstChild) {
        fragment.append(child);
    }
    fragment_compile(fragment);

    function fragment_compile(node) {
        const pattern = /\{\{\s*(\S+)\s*\}\}/;
        if (node.nodeType === 3) {
            const res_regex = pattern.exec(node.nodeValue);
            if (res_regex) {
                const value = res_regex[1].split(".").reduce(
                    (total, current) => total[current], instance.$data
                );
                node.nodeValue = node.nodeValue.replace(pattern, value);
                console.log(node.nodeValue);
            }
            return
        }
        node.childNodes.forEach(child => fragment_compile(child));
    }
    instance.$el.appendChild(fragment);
}