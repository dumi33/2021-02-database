# 2021-db

## 3주차 실습 실행 방법


1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:dumi33/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/dumi33/2021-02-database.git
2. week3 폴더로 이동
    >cd week3
3. 콘솔창 (powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)

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

## <span style="color:red"> 테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
김두미|컴퓨터공학과|데이터베이스|12201111|
김복순|정보통신공학과|정보통신|12201111|
김한선|전자공학과|정보통신|12201111|

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~ 있어요

