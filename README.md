這是一個 [**React Native**](https://reactnative.dev) 的專案

# React Native環境架設(React Native Cli)

```sh
npx @react-native-community/cli init AwesomeProject
```

## 可能需要手動安裝 pods

```sh
cd AwesomeProject/ios //手動安裝 pods
pod install  //手動安裝 pods
cd ..
```
## Buid and Run
```sh
yarn ios //實機
yarn ios --simulator "iPhone 16 Pro" //simulator
```

# Stack Navigation（堆疊導航） 

以下是將你的程式碼升級為包含 Stack Navigation（堆疊導航） 的步驟：

1. 安裝必要的套件
請在你的專案目錄下執行以下指令：
Bash

### 安裝核心套件
```sh
npm install @react-navigation/native @react-navigation/stack
```
### 安裝導航所需的依賴（如果你還沒裝的話）
```sh
npm install react-native-screens react-native-safe-area-context
```
在 iOS 上，每當你安裝包含原生代碼的套件後，必須更新 Pods：
Bash

```sh
cd ios
pod install
cd ..
```

# 手势处理
安装负责手势处理的库（react-native-gesture-handler）
```sh
react-native link react-native-gesture-handler
cd ios
pod install
cd ..
```
检查配置：
确保在你的项目中正确配置了 react-native-gesture-handler：
在 index.js 或 App.js 的顶部导入手势处理：
```sh
import 'react-native-gesture-handler';
```

清除缓存：
有时，问题可能与缓存数据有关。清除缓存：
```sh
npm start -- --reset-cache
```

# TableView

## 使用 ChevronRight 圖標

```sh
yarn add lucide-react-native
```

安裝必要的依賴
在終端機執行以下指令：

## 安裝 react-native-svg
```sh
npm install react-native-svg
```
### 如果你是使用 iOS 模擬器或實體機，必須執行 pod install
```sh
cd ios && pod install && cd ..
```
### 重啟 Metro Bundler (非常重要)

當你安裝了包含「原生程式碼 (Native Code)」的套件（如 react-native-svg）時，僅僅存檔是不夠的，你必須重新編譯 App：

關閉目前的終端機視窗。

重新啟動 Metro：npx react-native start --reset-cache

在另一個視窗重新啟動 App：

iOS: npx react-native run-ios

Android: npx react-native run-android



# 學習資源

## 英文官方網站 (核心文件/最新資訊)：
* https://reactnative.dev/

## 中文社群網站 (非官方，但常被使用)：
* https://reactnative.cn/
* https://rn.nodejs.cn/





This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
