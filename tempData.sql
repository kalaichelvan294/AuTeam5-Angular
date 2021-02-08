drop table plan_request;
drop table plan_output_xfx;
drop table flightleg;

create table plan_request(
id integer primary key auto_increment,
oidval integer,
flightNo integer,
flightZdate Date,
legNo integer,
origin varchar(30),
destination varchar(30),
iterationnumber integer,
timeofrequest timestamp,
alternate1 varchar(30)
);

create table plan_output_xfx(
id integer primary key auto_increment,
release_number integer,
time_dispatcher_signed varchar(40),
iteration_number integer,
oidval integer references plan_request(oidval)
);

create table flightleg(
	oidval integer primary key auto_increment,
    flight_no integer,
    flight_zdate date,
    leg_no integer,
    sch_out_tmstp timestamp,
    sch_in_tmstp timestamp
);

truncate table plan_request;
truncate table plan_output_xfx;
truncate table flightleg;

truncate table flightleg;
insert ignore into flightleg(flight_no, flight_zdate, leg_no, sch_out_tmstp, sch_in_tmstp) values
    (1, current_date(), 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (2, current_date(), 2, addtime(current_timestamp(),"1:30:5.00"), CURRENT_TIMESTAMP()),
    (3, current_date(), 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (4, current_date(), 3,  addtime(current_timestamp(),"1:30:5.00"), CURRENT_TIMESTAMP()),
    (5, current_date(), 4,  addtime(current_timestamp(),"1:30:5.00"), CURRENT_TIMESTAMP());
    
truncate table plan_request;
insert ignore into plan_request(oidval, flightNo, flightzdate, legNo, origin, destination, iterationnumber, timeofrequest, alternate1) values
    (1, 1, current_date(), 4, "VMM", "KLA", 2, CURRENT_TIMESTAMP(), "KGF"),
    (2, 1, current_date(), 2, "VMM", "KLA", 4, CURRENT_TIMESTAMP(), "CJS"),
    (3, 1, current_date(), 3, "VMM", "KIJ", 4, CURRENT_TIMESTAMP(), "CJS"),
    (3, 1, current_date(), 6, "BHY", "KKIO", 4, CURRENT_TIMESTAMP(), "NHB"),
    (4, 1, current_date(), 7, "BHY", "KKIO", 8, CURRENT_TIMESTAMP(), "NHB"),
    (4, 2, current_date(), 6, "KVMM", "KJLA", 1, CURRENT_TIMESTAMP(), "TKS"),
    (1, 1, date_sub(current_date(),INTERVAL 5 DAY), 7, "CSI", "KLA", 2, CURRENT_TIMESTAMP(), "JHF"),
    (2, 1, current_date(), 8, "BHY", "KLA", 4, CURRENT_TIMESTAMP(), "CJS"),
    (3, 1, date_sub(current_date(),INTERVAL 5 DAY), 12, "NMU", "FTG", 3, CURRENT_TIMESTAMP(), "CJS"),
    (4, 2, current_date(), 1, "KVMM", "KJLA", 1, CURRENT_TIMESTAMP(), "TKS"),
    (5, 2, date_sub(current_date(),INTERVAL 5 DAY), 9, "KOTG", "KUIH", 1, CURRENT_TIMESTAMP(), "POI"),
    (5, 2, current_date(), 11, "JUH", "KDR", 1, CURRENT_TIMESTAMP(), "AVG"),
    (5, 2, current_date(), 10, "KVJK", "KUHA", 2, CURRENT_TIMESTAMP(), "BGU");

insert ignore into plan_output_xfx(release_number, time_dispatcher_signed, iteration_number, oidval) values
    (0, current_timestamp(), 2, 1),
    (0, current_timestamp(), 3, 2),
    (0, addtime(current_timestamp(),"1:30:5.00"), 3, 2),
    (0, addtime(current_timestamp(),"1:30:5.00"), 3, 2),
    (2, current_timestamp(), 4, 3),
    (6, current_timestamp(), 8, 4),
    (2, addtime(current_timestamp(),"2:30:5.00"), 8, 4),
    (10, current_timestamp(), 1, 5);

select * from plan_request;
select * from plan_output_xfx;
select * from flightleg;