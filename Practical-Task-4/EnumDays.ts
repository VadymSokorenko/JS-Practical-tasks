enum Days {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday",
}

function getActivity(day: Days) {
    switch (day) {
        case Days.MONDAY, Days.TUESDAY, Days.WEDNESDAY, Days.THURSDAY, Days.FRIDAY:
            return "Робота";
        case Days.MONDAY:
            return "Відпочинок";
        default:
            return "Вкажіть валідний день тижня";
    }
}