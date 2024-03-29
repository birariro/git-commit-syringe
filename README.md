# git-commit-syringe

English · [Korea](./README.ko.md)

Create commit on any date you want<br>
You can do something very interesting with this

## 📄 Usage

### fork and clone repository

<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/doc.png?raw=true"/>
</p>
<br>

```sh
git clone https://github.com/"<your github name>"/git-commit-syringe.git && cd git-commit-syringe
```

### setup dependency

`npm install dotenv`

### setup .env

Enter the date you want in the `.env` file with the value `datae`

```
filePath = "src/fizzbuzz.txt"
dates = "<Enter the date you want>"
```

You can do this as an example

```
dates = "2024-01-01,2024-01-02"
```

### run js

```sh
node run.js
```

<br>

## 🎥 Sample

### Before commit state

<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/old.png?raw=true"/>
</p>

### .env setup and run

```
dates = "2019-1-1,2019-1-2,2019-1-3,2019-1-4,2019-1-5,2019-1-6,2019-1-7,2019-1-8,2019-1-9,2019-1-10,2019-1-11,2019-1-12,2019-1-13,2019-1-14,2019-1-15,2019-1-16,2019-1-17,2019-1-18,2019-1-19,2019-1-20"
```

```sh
node run.js
git push origin
```

### After commit state

<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/new.png?raw=true"/>
</p>

## 🎨 Draw GitHub using commit

using tool.js
You can get a `dates` for creating up to six characters on GitHub <br>
`node tool.js <"year"|2019> <"string"|HELLO>`

```
[git hub draw expected]
 ■  □  □  □  □  □  ■  □  ■  ■  ■  ■  ■  ■  ■  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  □  ■  ■  ■  ■  ■  □
 ■  □  □  □  □  □  ■  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  ■
 ■  □  □  □  □  □  ■  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  ■
 ■  ■  ■  ■  ■  ■  ■  □  ■  ■  ■  ■  ■  ■  ■  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  ■
 ■  □  □  □  □  □  ■  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  ■
 ■  □  □  □  □  □  ■  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  □  □  ■  □  □  □  □  □  ■
 ■  □  □  □  □  □  ■  □  ■  ■  ■  ■  ■  ■  ■  □  ■  ■  ■  ■  ■  ■  ■  □  ■  ■  ■  ■  ■  ■  ■  □  □  ■  ■  ■  ■  ■  □

[.env dates]
2019-01-06,2019-01-07,2019-01-08,2019-01-09,2019-01-10,
2019-01-11,2019-01-12,2019-01-16,2019-01-23,2019-01-30,
2019-02-06,2019-02-13,2019-02-17,2019-02-18,2019-02-19,
2019-02-20,2019-02-21,2019-02-22,2019-02-23,2019-03-03,
2019-03-04,2019-03-05,2019-03-06,2019-03-07,2019-03-08,
2019-03-09,2019-03-10,2019-03-13,2019-03-16,2019-03-17,
2019-03-20,2019-03-23,2019-03-24,2019-03-27,2019-03-30,
2019-03-31,2019-04-03,2019-04-06,2019-04-07,2019-04-10,
2019-04-13,2019-04-14,2019-04-17,2019-04-20,2019-04-28,
2019-04-29,2019-04-30,2019-05-01,2019-05-02,2019-05-03,
2019-05-04,2019-05-11,2019-05-18,2019-05-25,2019-06-01,
2019-06-08,2019-06-15,2019-06-23,2019-06-24,2019-06-25,
2019-06-26,2019-06-27,2019-06-28,2019-06-29,2019-07-06,
2019-07-13,2019-07-20,2019-07-27,2019-08-03,2019-08-10,
2019-08-19,2019-08-20,2019-08-21,2019-08-22,2019-08-23,
2019-08-25,2019-08-31,2019-09-01,2019-09-07,2019-09-08,
2019-09-14,2019-09-15,2019-09-21,2019-09-22,2019-09-28,
2019-09-30,2019-10-01,2019-10-02,2019-10-03,2019-10-04

```

<p align="center">
    <img src="https://github.com/birariro/git-commit-syringe/blob/main/img/result.png?raw=true"/>
</p>
