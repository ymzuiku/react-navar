import mem from 'mem';

export const appendCss = mem((str: string) => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = str;
  document.head.appendChild(styleElement);

  // 暂时只匹配一个class
  const regex = /\.[^{^:]*/;
  const names = str.match(regex);
  const classname = names ? names.map((v) => v.replace(/(\.| )/g, '')).join(' ') : '';

  return `${classname} `;
});

export const setValues = (obj: any) => {
  const keys = Object.keys(obj);
  keys.forEach((k) => {
    document.body.style.setProperty(k, obj[k]);
  });
};

let allParasers: any = {};

export const setMatchs = (lists: any) => {
  const obj: any = {};
  lists.forEach((list: [any, any]) => {
    const [k, fn] = list;

    obj[k] = mem(
      (param: string): React.CSSProperties => {
        let v: string = param.replace(k, '') as any;
        if (v.indexOf('--') === 0) {
          v = `var(${v})`;
        }
        v = v.replace(/_/g, ' ');

        return fn(v);
      },
    );
  });
  allParasers = { ...allParasers, ...obj };

  return obj;
};

let cssUseTime = 0;
export const cssin = mem(
  (...args: any[]): string => {
    // 用来记录cssin的总耗时
    const startOnceTime = Date.now();

    const param = args.join(' ');

    let style = '';
    const tokens = param.split(' ');

    tokens.forEach((v: string) => {
      if (v === '') {
        return;
      }
      const prelist = v.split(':');
      let pre = '';

      if (prelist.length > 1) {
        const [thePre, ...rest] = prelist;
        pre = `:${thePre}`;
        v = rest.join('');
      }
      const [key, value] = v.split('=');
      // 将特殊字符转为 number code
      const name = v.replace(/[^-0-0a-zA-Z]/g, (reg: string) => `_${reg.charCodeAt(0).toString(16)}_`);
      if (value) {
        // 包含等号的token 如 bg=#f00
        const fn = allParasers[`${key}=`];
        console.log(key, value, fn, allParasers);
        if (fn) {
          const cssString = `.${name}${pre} ${fn(value)}`;
          style += appendCss(cssString);
        } else {
          // 包含等号的token, 且未预设 如 background-color=#f00
          let subV = value;
          if (value.indexOf('--') === 0) {
            subV = `var(${value})`;
          }

          subV = subV.replace(/_/g, ' ');
          const cssString = `.${name}${pre} {${key}:${subV}}`;
          style += appendCss(cssString);
        }
      } else {
        // 不包含等号的token，如 fixed.
        const fn = allParasers[v];
        if (fn) {
          const cssString = `.${name}${pre} ${fn('')}`;
          style += appendCss(cssString);
        }
      }
    });

    cssUseTime += Date.now() - startOnceTime;

    console.log('cssUseTime 一共消耗了(ms):', cssUseTime);

    return style;
  },
);
