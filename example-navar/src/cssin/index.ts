import mem from 'mem';

export const appendCss = mem((str: string) => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = str;
  document.head.appendChild(styleElement);
  const regex = /\.[^{^:]*/g;
  const names = str.match(regex);

  const classname = names ? names.map((v) => v.replace(/(\.| )/g, '')).join(' ') : '';

  // tslint:disable-next-line
  return classname + ' ';
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

const haxList = { '#': '_a_', '%': '_b_', '.': '_c_', $: '_d_', '=': '_e_', '\\': '_f_' };

export const cssin = mem(
  (param: string): string => {
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
      const name = v.replace(/(\=|#|%|\.|\$)/g, (reg: string) => (haxList as any)[reg]);

      if (value) {
        // 包含等号的token 如 bg=#f00
        const fn = allParasers[`${key}=`];
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

    return style;
  },
);
