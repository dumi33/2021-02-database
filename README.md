# 2021-db

## 3주차 DB 테이블 내용

1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:dumi33/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/dumi33/2021-02-database.git
2. week3 폴더로 이동
    >cd week3
3. 콘솔창 (powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
1. 명령 프롬프트를 이용해서 mysql에 접속한다.
2. 새롭게 스키마와 테이블을 만든다.
3. 컬럼들을 추가해준다. 

<br>

```sql
CREATE TABLE STUDENT (Name VARCHAR(30) NOT NULL,
    StudentNumber INTEGER NOT NULL,
    Major CHAR(4),
    Grade INTEGER,
    Date DATE,
    Email VARCHAR(25),
    PRIMARY KEY(StudentNumber) );

    insert into student (Name, StudentNumber, Major) values ('홍길동', '12211234', '정통');
    insert into student (Name, StudentNumber, Major) values ('김두미', '12191728', '정통');
    update student set Email="gildong@naver.com" where Name = '홍길동';
    update student set Email="dumi33@naver.com" where Name = '김두미';
    update student set Date="2019-03-02" where Name = '김두미';
    update student set Date="2021-03-02" where Name = '홍길동';
    update student set Grade=3 where Name = '김두미';
    update student set Grade=1 where Name = '홍길동';
```

## <span style="color:red"> 3주차 테이블</span>

Name|StudentNumber|Major|Grade|Date|Email
---|---|---|---|---|---|
김두미|12191728|정통|3|2019-03-02|dumi33@naver.com|
홍길동|12211234|정통|1||2021-03-02|gildong@naver.com|



<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root', 
        datebase: 'week3',
        password: 'mfsiha$33',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>




## <span style="color:red"> 테이블</span>

이름|과|전공|학번
---|---|---|---|
김희재|정보통신공학과|정보통신|12201111|
김두미|컴퓨터공학과|데이터베이스|12201111|
김복순|정보통신공학과|정보통신|12201111|
김한선|전자공학과|정보통신|12201111|

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~ 있어요

## 8주차 DB 테이블 내용


## 10주차 DB 테이블 내용