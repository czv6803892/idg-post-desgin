/*
 * @Author: Billy-S
 * @Description:
 * @Date: 2020-09-01 16:48:12
 * @LastEditTime: 2020-09-11 14:24:51
 */
import { Components } from '@idg/idg';
import BodyContent from './body-content';
import LeftSideMenu from './left-side-menu';
import RightSideMenu from './right-side-menu';
import leftMenuItems from './left-side';
import rightMenuItems from './right-side';
import DrawWrapper from './draw-wrapper';
const components: Components = {
  BodyContent,
  LeftSideMenu,
  RightSideMenu,
  DrawWrapper,
  ...leftMenuItems,
  ...rightMenuItems,
};

export default components;
