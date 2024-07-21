/****
마지막 수정일: 2024-06-05 14:25:00
****/

/* 커뮤니티-이벤트 테이블 */
-- 1] 생성 테이블
CREATE TABLE snowfox_event(
	event_id int auto_increment primary key,
    event_title varchar(50) not null,
    author varchar(10) not null,
    event_image varchar(100),
    event_startdate date not null,
    event_enddate date not null,
    reg_date datetime not null,
    hits int DEFAULT(0) not null
);

-- 2] 샘플 데이터 INSERT
insert into snowfox_event(event_title, author, event_image, event_startdate, event_enddate, reg_date)
values 
('포토리뷰 작성하고 적립금을 받으세요!', '관리자', 'https://snowfoxflowers.com/file_data/snowfoxbc/2023/12/13/3bd627d4948459e7db7dfe81058ea6e8.jpg', '2023-01-01', '2023-01-31', '2022-12-13 09:14:24'),
('스노우폭스 플라워 회원가입 이벤트', '관리자', 'https://snowfoxflowers.com/file_data/snowfoxbc/2023/12/13/b405cdb565350b0f9d9392ab70d29634.jpg', '2023-01-01', '2023-01-31', '2022-12-21 13:45:12');

/* 커뮤니티-1:1문의 테이블 */
-- 1] qna 게시판 테이블
CREATE TABLE snowfox_board_qna(
	bqid int auto_increment primary key,
    bqtitle varchar(50) not null,
    bqclaim varchar(1000) not null,
    bqdate datetime not null,
    bqhits int not null default(0),
    user_id varchar(20) not null,
    privacy boolean not null
);
-- 2] qna 게시판 샘플 데이터
insert into snowfox_board_qna(bqtitle, bqclaim, bqdate, user_id, privacy)
values ('배송 문의', '주문한지 3일이 지났는데\n여전히 배송을 받지 못하고 있습니다.\n\n확인 부탁드립니다.', NOW(), 'hong1234', true);