# 2021-db

## 3주차 DB 테이블 내용

1. 명령 프롬프트를 이용해서 mysql에 접속한다.
    > mysql -uroot -p
    - 비밀번호 입력
2. 새롭게 스키마와 테이블을 만든다.
    > create table student ~~
3. 컬럼들을 추가해준다. 
    > insert into student ~~

<br>

## sql 코드 

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

<br>

## 8주차 DB 테이블 내용

1. mysql에 'week8' 스키마를 생성한다.
    > create schema if not exists `week8` default character set utf8mb4;
2. 테이블을 생성한다. 
    > create table EMPLOYEE
    > create table DEPARTMENT
3. localhost에 접속하여 컬럼들을 추가해준다.

## <span style="color:red"> 8주차 테이블</span>

## <span style="color:green"> 8주차 테이블 - 직원테이블</span>
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
두미|F|김|12191728|wed Jan 10 2001|안산|여|20||1|
상준|S|김|12191729|sun Sep 24 2000|인천|남|30|12191728|3|
건후|G|이|12191730|sat Apr 05 1997|부산|남|10||4|
진태|J|박|12191731|mon Sep 23 1996|서울|남|40|12191729|6|
도경|D|이|12191732|wed Oct 23 1996|대구|여|35|12191728|4|

## <span style="color:green"> 8주차 테이블 - 부서테이블</span>
Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
경리부|1|12191728|Sat Oct 01 2021|
인사부|4|12191733|Fri Apr 05 2019|
문서부|6|12191731|Wed Dec 02 2020|

<br>

## 10주차 DB 테이블 내용

## <span style="color:red"> 10주차 테이블</span>

## <span style="color:green"> 10주차 테이블 - 학생테이블</span>

Sname|Ssn|Sno
---|---|---|
김두미|12191728|1
김두수|12191729|2
김두양|12191730|3
문채영|12191731|4
박소언|12191732|5


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
