# git-commit-syringe

과거 원하는 날짜의 git commit 을 생성하여 
github 의 잔디를 심는다.

## Usage

### fork repository
<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/doc.png?raw=true"/>
</p>
<br><br>


### clone fork repository

```sh
git clone https://github.com/"<your github name>"/git-commit-syringe.git && cd git-commit-syringe
```

### setup dependency
```npm install dotenv```

### setup .env
dates : 커밋할 날짜 모음 ('yyyy-mm-dd,yyyy-mm-dd')

### run js
```sh
node run.js 
```

<br>

## expected result

### commit state
<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/old.png?raw=true"/>
</p>

### .env
```
dates = "2019-1-1,2019-1-2,2019-1-3,2019-1-4,2019-1-5,
2019-1-6,2019-1-7,2019-1-8,2019-1-9,2019-1-10,2019-1-11,
2019-1-12,2019-1-13,2019-1-14,2019-1-15,2019-1-16,2019-1-17,
2019-1-18,2019-1-19,2019-1-20"
```

### run and push
```sh
node run.js
git push origin
```

<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/new.png?raw=true"/>
</p>


## 커밋으로 문자 표현

tool.js 를 사용하여
원하는 연도의 커밋 대시보드에 최대 6글자 문자를 만들기 위한 ```dates``` 를 제공받을 수 있습니다
```
node tool.js <"year"|2019> <"string"|HELLO>
```

[sample commit link](https://github.com/birariro/git-commit-syringe-sample)
<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/result.png?raw=true"/>
</p>

