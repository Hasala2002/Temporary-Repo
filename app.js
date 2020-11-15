var data = {
    sessionOne:[
        {
            roomNo: 1,
            schoolName: 'Carey College',
            teamCode: 'CCC-0',
            presenter: 'Thithiesha Mahabanduge'
        },
        {
            roomNo: 2,
            schoolName: 'Devi Balika Vidyalaya',
            teamCode: 'DBC-0',
            presenter: 'Savindu Kumarasekara'
        },
        {
            roomNo: 3,
            schoolName: "Girls' High School",
            teamCode: 'GHK-0',
            presenter: ' Pahan Abayawardana'
        },
        {
            roomNo: 4,
            schoolName: 'Mahanama College',
            teamCode: 'MCC-0',
            presenter: 'Induwara Ranathunga '
        },
        {
            roomNo: 5,
            schoolName: 'Musaeus College',
            teamCode: 'MUC-0',
            presenter: 'Chanupa Gunasena'
        },
        {
            roomNo: 6,
            schoolName: 'Nalanda College',
            teamCode: 'NCC-0',
            presenter: 'Deepaja Premathilake'
        },
        {
            roomNo: 7,
            schoolName: 'Nalanda College',
            teamCode: 'NCC-5',
            presenter: 'Chaheth Senevirathne'
        },
        {
            roomNo: 8,
            schoolName: 'Rahula College ',
            teamCode: 'RCM-0',
            presenter: 'Gasith Sanduwara '
        },
        {
            roomNo: 9,
            schoolName: 'Rahula College ',
            teamCode: 'RCM-5',
            presenter: 'Sachintha Abeyarathne'
        },
        {
            roomNo: 10,
            schoolName: 'Royal Institute',
            teamCode: 'RIH-0',
            presenter: 'Chethaka Samaraweera'
        },
        {
            roomNo: 11,
            schoolName: 'Sirimavo Bandaranaike Vidyalaya',
            teamCode: 'SBV-0',
            presenter: 'Yasith Gamage'
        },
        {
            roomNo: 12,
            schoolName: 'Visakha Vidyalaya',
            teamCode: 'VVC-0',
            presenter: 'Supun Edirisuriya'
        },
        {
            roomNo: 13,
            schoolName: 'Visakha Vidyalaya ',
            teamCode: 'VVC-5',
            presenter: 'Hasalu Botheju'
        },
        {
            roomNo: 14,
            schoolName: 'Visakha Vidyalaya',
            teamCode: 'VVC-10',
            presenter: 'Savinu Anusara'
        },
        {
            roomNo: 15,
            schoolName: 'Wesley College',
            teamCode: 'WCC-0',
            presenter: 'Chamindu Amarasinghe'
        },
    ],
    sessionTwo:[
        {
            roomNo: 1,
            schoolName: 'Anula Vidyalaya',
            teamCode: 'AVN-0',
            presenter: 'Supun Edirisuriya'
        },
        {
            roomNo: 2,
            schoolName: "Bishop's College",
            teamCode: 'BCC-0',
            presenter: 'Savindu Kumarasekara'
        },
        {
            roomNo: 3,
            schoolName: "Gateway College",
            teamCode: 'GCC-0',
            presenter: 'Chamindu Amarasinghe'
        },
        {
            roomNo: 4,
            schoolName: 'Gurulugomi Maha Vidyalaya',
            teamCode: 'GMK-0',
            presenter: 'Gasith Sanduwara'
        },
        {
            roomNo: 5,
            schoolName: 'Lumbini College',
            teamCode: 'LCC-0',
            presenter: 'Deepaja Premathilaka'
        },
        {
            roomNo: 6,
            schoolName: 'Mahamaya Balika Vidyalaya',
            teamCode: 'MBN-0',
            presenter: 'Pahan Abayawardana'
        },
        {
            roomNo: 7,
            schoolName: "Pushpadana Girls' College",
            teamCode: 'PGK-0',
            presenter: 'Savinu Anusara'
        },
        {
            roomNo: 8,
            schoolName: 'Royal Central College',
            teamCode: 'RCP-0',
            presenter: 'Chanupa Gunasena'
        },
        {
            roomNo: 9,
            schoolName: "St. Anthony's College",
            teamCode: 'SAK-0',
            presenter: 'Chaheth Senevirathne'
        },
        {
            roomNo: 10,
            schoolName: "St. Anthony's College",
            teamCode: 'SAK-5',
            presenter: 'Hasalu Botheju'
        },
        {
            roomNo: 11,
            schoolName: "St. Benedict's College",
            teamCode: 'SBC-0',
            presenter: 'Sachintha Abeyarathne'
        },
        {
            roomNo: 12,
            schoolName: "St. Benedict's College",
            teamCode: 'SBC-5',
            presenter: 'Thithiesha Mahabanduge'
        },
        {
            roomNo: 13,
            schoolName: 'Sanghamitta Balika Vidyalaya',
            teamCode: 'SBG-0',
            presenter: 'Induwara Ranathunga'
        },
        {
            roomNo: 14,
            schoolName: 'Sanghamitta Balika Vidyalaya',
            teamCode: 'SBG-5',
            presenter: 'Yasith Gamage'
        },
        {
            roomNo: 15,
            schoolName: 'S/Vishaka Balika Vidyalaya',
            teamCode: 'VBS-0',
            presenter: 'Chethaka Samaraweera'
        },
    ],
}

var resSession= document.getElementById('resSession')
var resRoomNo = document.getElementById('resRoomNo')
var resTeamCode = document.getElementById('resTeamCode')
var resSchoolName = document.getElementById('resSchoolName')
var resPresenter = document.getElementById('resPresenter')

window.onload = function start(){
    let session = document.getElementById('selector').value
    let session1 = document.getElementById('session1')
    let session2 = document.getElementById('session2')
    if (session === '1'){
      session2.style.display='none'
    }
    else{
        session1.style.display='none'
    }
    loadData()
}

function selector(){
    var session = document.getElementById('selector').value
    if (session === '1'){
        session2.style.display='none'
        session1.style.display='flex'
        resRoomNo.innerHTML = 'select code pls'
        resTeamCode.innerHTML = 'select code pls'
        resSchoolName.innerHTML =  'select code pls'
        resPresenter.innerHTML = 'select code pls'
        resSession.innerHTML = session
      }
      else{
          session1.style.display='none'
          session2.style.display='flex'
          resRoomNo.innerHTML = 'select code pls'
          resTeamCode.innerHTML = 'select code pls'
          resSchoolName.innerHTML =  'select code pls'
          resPresenter.innerHTML = 'select code pls'
          resSession.innerHTML = session
      }
}

function loadData(){
    let session1 = document.getElementById('session1')
    let session2 = document.getElementById('session2')
    data.sessionOne.forEach(function (roomData) {
        let room = document.createElement('div')
        mainid='session1-'+String(roomData.roomNo)
        room.setAttribute('class','room')
        room.setAttribute('roomNo',roomData.roomNo)
        room.setAttribute('id',mainid)
        room.setAttribute('school-name',roomData.schoolName)
        room.setAttribute('team-code',roomData.teamCode)
        room.setAttribute('presenter',roomData.presenter)
        room.setAttribute('onclick','showData("'+mainid+'")')
        room.innerHTML=roomData.teamCode
        session1.appendChild(room)
      });
    data.sessionTwo.forEach(function (roomData) {
        let room = document.createElement('div')
        mainid='session2-'+String(roomData.roomNo)
        room.setAttribute('class','room')
        room.setAttribute('roomNo',roomData.roomNo)
        room.setAttribute('id',mainid)
        room.setAttribute('school-name',roomData.schoolName)
        room.setAttribute('team-code',roomData.teamCode)
        room.setAttribute('presenter',roomData.presenter)
        room.setAttribute('onclick','showData("'+mainid+'")')
        room.innerHTML=roomData.teamCode
        session2.appendChild(room)
      });
}

function showData(mainid){
  let selectedRoom = document.getElementById(mainid)
  let tempObj = {
  currentRoomNo : selectedRoom.getAttribute('roomNo'),
  currentSchoolName : selectedRoom.getAttribute('school-name'),
  currentTeamCode : selectedRoom.getAttribute('team-code'),
  currentPresenter : selectedRoom.getAttribute('presenter')
}
resRoomNo.innerHTML = tempObj.currentRoomNo 
resTeamCode.innerHTML = tempObj.currentTeamCode 
resSchoolName.innerHTML = tempObj.currentSchoolName 
resPresenter.innerHTML = tempObj.currentPresenter
}