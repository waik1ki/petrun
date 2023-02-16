## **💻 펫런**

진행 기간 : 2022 / 08 / 23 ~ 2022 / 09 / 17

팀 구성 : 프론트엔드 1명

## **📄 서비스 소개**

펫런 어플을 소개하는 사이트입니다.

사이트 주소 : [http://petrun.kr/](http://petrun.kr/)

## 👨🏻‍💻 역할

프론트엔드

## 🛠 기술 스택

- Front-End
    - Vue.js
    - Vuetify

## **📌 주요 기능**

- 데스크탑, 태블릿, 모바일 반응형 웹사이트
- 메일 전송

### 1. **반응형**

**데스크탑**

![1](https://user-images.githubusercontent.com/79083202/219441809-31dc7063-91b2-4f56-82e3-fa9386b4da55.gif)

**태블릿**

![2](https://user-images.githubusercontent.com/79083202/219441823-33508088-67a9-4093-96df-5c2ba91108fe.gif)

**모바일**

![3](https://user-images.githubusercontent.com/79083202/219441828-aefbcdb1-55d9-4898-b56e-9cc3f6f8460a.gif)

### 2. **메일 전송**

![4](https://user-images.githubusercontent.com/79083202/219441833-53d6d3e9-7977-4e1a-bab1-4351f46f1180.gif)

## **⚠️ 개발 이슈**

- 컴포넌트 구조
    
    개발을 진행하며 웹페이지의 디자인이 수정되어 코드를 수정해야하는 상황이 자주 발생하였고, 코드를 수정하게 됨에 따라 컴포넌트의 구조 또한 수정하게 되는 상황이 자주 발생하였습니다.
    
    이를 통해 컴포넌트를 조금 더 세분화 하여 개발을 진행해야겠다고 생각하였고 컴포넌트의 구조를 개선하게 되었습니다.
    
    ### **개선 전**
    
    ```markdown
    .
    └── components
        ├── Advideo.vue
        ├── Banner.vue
        ├── Challenge.vue
        ├── Community.vue
        ├── Contact.vue
        ├── Footer.vue
        ├── Header.vue
        └── PetMall.vue
    ```
    
    ### **개선 후**
    
    ```markdown
    .
    └── components
        ├── Advideo.vue
        ├── Banner.vue
        ├── Challenge.vue
        ├── Community.vue
        ├── Contact.vue
        ├── InteractionArea.vue
        ├── PetMall.vue
        ├── ResponsiveSection.vue
        ├── SectionCategory.vue
        ├── SocialMediaButton.vue
        ├── common
        │   ├── AppHeader.vue
        │   └── Footer.vue
        └── slider
            ├── CharacterSlider.vue
            └── WeatherSlider.vue
    ```
