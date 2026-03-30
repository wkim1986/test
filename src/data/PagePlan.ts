// //각 페이지 설계는 이곳에서만 함. 헤더,바디,푸터 각각의 대괄호[] 안에서 컴마(,) 기준으로 순서 바꾸면 바뀜. 중간 여백이나 가로 배열도 컴포넌트화 시켜서 배치 자율.

// import { PART_NAMES } from './Routes';

// // 1. 메인 페이지 설계도
// export const mainPagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { 
//     roomKey: "body", 
//     parts: [
//       PART_NAMES.HERO,
//       // PART_NAMES.BUTTON,
//       { name: PART_NAMES.SECTION_HEADER, dataKey: "visionHeader" }, 
//       PART_NAMES.VISION,
//     ] 
//   },
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // 2. 차세대교육국 페이지 설계도
// export const NGM_PagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { 
//     roomKey: "body", 
//     parts: [
//       // PART_NAMES.HERO,
//       { name: PART_NAMES.GAP, height: "70px" },
//       // { name: PART_NAMES.SECTION_HEADER, dataKey: "educationHeader" },
//       PART_NAMES.BUTTON,
//       PART_NAMES.EDUCATION,
//       // { name: PART_NAMES.GAP, height: "50px" },
//       // PART_NAMES.BUTTON
//     ] 
//   },
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // 3. 유아처(Kids) 설계도
// export const kidsPagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { roomKey: "body", parts: [

//       { name: PART_NAMES.DEPT_INTRO, dataKey: "kidsIntro" },
//       { name: PART_NAMES.PICTURE, dataKey: "kidsPhoto" },
//       { name: PART_NAMES.GAP, height: "30px" },
//       { 
//         name: PART_NAMES.ROW, 
//         gap: "40px", 
//         parts: [
//           { name: PART_NAMES.ACTIVITY_LIST, dataKey: "kidsActivity" },
//           { name: PART_NAMES.TIME_TABLE, dataKey: "kidsTime" }
//         ] 
//       }

//   ] }, 
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // 4. 초등처(Elementary) 설계도
// export const elementaryPagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { roomKey: "body", parts: [

//       { name: PART_NAMES.DEPT_INTRO, dataKey: "elementaryIntro" },
//       { name: PART_NAMES.PICTURE, dataKey: "elementaryPhoto" },
//       { name: PART_NAMES.GAP, height: "30px" },
//       { 
//         name: PART_NAMES.ROW, 
//         gap: "40px", 
//         parts: [
//           { name: PART_NAMES.ACTIVITY_LIST, dataKey: "elementaryActivity" },
//           { name: PART_NAMES.TIME_TABLE, dataKey: "elementaryTime" }
//         ] 
//       }

//   ] }, 
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // 5. 청소년처(Youth) 설계도
// export const youthPagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { roomKey: "body", parts: [

//       { name: PART_NAMES.DEPT_INTRO, dataKey: "youthIntro" },
//       { name: PART_NAMES.PICTURE, dataKey: "youthPhoto" },
//       { name: PART_NAMES.GAP, height: "30px" },
//       { 
//         name: PART_NAMES.ROW, 
//         gap: "40px", 
//         parts: [
//           { name: PART_NAMES.ACTIVITY_LIST, dataKey: "youthActivity" },
//           { name: PART_NAMES.TIME_TABLE, dataKey: "youthTime" }
//         ] 
//       }

//   ] }, 
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // 6. 섬기는 사람들(Staff) 설계도
// export const staffPagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { roomKey: "body", parts: [
//     // 상단 여백을 위해 GAP 추가 (선택사항)
//       { name: PART_NAMES.GAP, height: "40px" },
//       { name: PART_NAMES.STAFF_CARD, dataKey: "staffData" }
//   ] }, 
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // 7. 말씀(Sermon) 설계도
// export const sermonPagePlan = [
//   { roomKey: "header", parts: [PART_NAMES.LOGO, PART_NAMES.NAVBAR] },
//   { roomKey: "body", parts: [
//     // 상단 여백
//       { name: PART_NAMES.GAP, height: "40px" },
      
//       // 통합형 미디어 카드 (타이틀, 탭 네비게이션, 영상 그리드가 이 안에서 모두 렌더링됨)
//       { name: PART_NAMES.MEDIA_CARD, dataKey: "sermonData" }, 
      
//       // 하단 여백
//       { name: PART_NAMES.GAP, height: "80px" }
//   ] }, 
//   { roomKey: "footer", parts: [PART_NAMES.FOOTER] }
// ];

// // [핵심] 주소 지도 (이곳에 등록되어야 PageBuilder가 찾아갑니다)
// export const PAGE_PLANS: Record<string, any[]> = {
//   "/": mainPagePlan,
//   "/N.G.M": NGM_PagePlan,
//   "/kids": kidsPagePlan,
//   "/elementary": elementaryPagePlan,
//   "/youth": youthPagePlan,
//   "/staff": staffPagePlan,
//   "/sermon": sermonPagePlan,
// };