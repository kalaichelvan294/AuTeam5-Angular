insert into flightleg(flight_no, flight_zdate, leg_no, sch_out_tmstp, sch_in_tmstp) values
    (1, now(), 1, now(), now()),
    (2, now(), 2, now(), now()),
    (3, now(), 1, now(), now()),
    (4, now(), 3, now(), now()),
    (5, now(), 4, now(), now());

insert into plan_request(oidval, flight_no, flight_zdate, legNo, origin, destination, iterationnumber, timeofrequest, alternate1) values
    (1, 1, now(), 1, "VMM", "KLA", 2, now(), "JHF"),
    (2, 1, now(), 2, "VMM", "KLA", 4, now(), "CJS"),
    (3, 1, now(), 3, "VMM", "KIJ", 3, now(), "CJS"),
    (4, 2, now(), 2, "KVMM", "KJLA", 1, now(), "TKS"),
    (5, 2, now(), 2, "KVJK", "KUHA", 2, now(), "BGU");

insert into plan_output_xfx(release_number, time_dispatcher_signed, iteration_number, oidval) values
    (12, now(), 2, 1),
    (21, now(), 3, 2),
    (2, now(), 4, 3),
    (6, now(), 8, 4),
    (10, now(), 1, 5);
