// 설계도의 문자열 키값과 실제 리액트 컴포넌트를 매핑하는 중앙 부품 창고

import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Vision from '../components/Vision';
import Education from '../components/Education';
import SectionHeader from '../components/SectionHeader';
import Gap from '../components/Gap';
import DeptIntro from '../components/DeptIntro';
import TimeTable from '../components/TimeTable';
import ActivityList from '../components/ActivityList';
import Row from '../components/Row';
import Picture from '../components/Picture';
import StaffCard from '../components/StaffCard';
import MediaCard from '../components/MediaCard';
import PictureCard from '../components/PictureCard';
import Notice from '../components/Notice';
import Footer from '../components/Footer';

export const PART_ROUTES: Record<string, React.ComponentType<any>> = {
  Logo,
  Navbar,
  Hero,
  Button,
  Vision,
  Education,
  SectionHeader,
  Gap,
  DeptIntro,
  TimeTable,
  ActivityList,
  Row,
  Picture,
  StaffCard,
  MediaCard,
  PictureCard,
  Notice,
  Footer
};

export const PART_NAMES = {
  LOGO: "Logo",
  NAVBAR: "Navbar",
  HERO: "Hero",
  BUTTON: "Button",
  VISION: "Vision",
  EDUCATION: "Education",
  SECTION_HEADER: "SectionHeader",
  GAP: "Gap",
  DEPT_INTRO: "DeptIntro",
  TIME_TABLE: "TimeTable",
  ACTIVITY_LIST: "ActivityList",
  ROW: "Row",
  PICTURE: "Picture",
  STAFF_CARD: "StaffCard",
  MEDIA_CARD: "MediaCard",
  PICTURE_CARD: "PictureCard",
  NOTICE: "Notice",
  FOOTER: "Footer"
} as const;