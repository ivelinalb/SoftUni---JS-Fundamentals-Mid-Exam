function studentReception(dataArr) {

    let allStudentsFor1H = Number(dataArr[0]) + Number(dataArr[1]) + Number(dataArr[2]);
    let allStudents = Number(dataArr[3]);
    let time = 0;
    
    while (allStudents > 0) {
        allStudents -= allStudentsFor1H;
        time++;

        if (time % 4 === 0) {
            time++;
        }
    }

    console.log(`Time needed: ${time}h.`);

}

studentReception();