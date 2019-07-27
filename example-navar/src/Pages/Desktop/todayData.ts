import { navarManager } from '../../lib';

export const todayData = [
  {
    dark: true,
    info: '编辑最爱',
    title: '本周新游戏推荐',
    footer: '点击了解这一周值得关注的5款游戏',
    src:
      'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    onClick: () => navarManager.push('Info'),
  },
  {
    dark: true,
    info: '指南',
    title: '为视频自动添加字幕',
    footer: '解锁隐藏技能系列',
    src: 'https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    onClick: () => navarManager.push('Info'),
  },
  {
    dark: false,
    info: '时下热门',
    title: '无比休闲的竞技之作',
    footer: '话题游戏《多多自走期》终于来啦',
    src: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    onClick: () => navarManager.push('Info'),
  },
  {
    dark: true,
    info: '游戏人生',
    title: '月光、剑、侍魂和长安',
    footer: '',
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564264458597&di=a012ebe3cea2e54f8f5db3f8a392ee95&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01273859ce4310a8012044632856b6.jpg%403000w_1l_2o_100sh.jpg',
    onClick: () => navarManager.push('Info'),
  },
  {
    dark: false,
    info: '古建筑',
    title: '不到长城，非好汉',
    footer: '',
    src: 'https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    onClick: () => navarManager.push('Info'),
  },
  {
    dark: true,
    info: '重磅更新',
    title: '决战黄昏圣殿',
    footer: '《完美世界》新种族 "妖精" 登场',
    src: 'https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    onClick: () => navarManager.push('Info'),
  },
  {
    dark: true,
    info: '编辑最爱',
    title: '长安十二时辰',
    footer: '夜半、鸡鸣、平旦、日出、食时、隅中、日中',
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564264262632&di=4bb316486b61da6a37c1b11e7d812c92&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F04%2F20190104113920_jyXyY.jpeg',
    onClick: () => navarManager.push('Info'),
  },
];
