# Querschnittliche Konzepte

## 1. Rollen & Rechte

### 1.1 Permissions

|abbreviation|description| hint          |
|----|----|---------------|
|C|Create|               |
|D|Delete|               |
|R|Read|               |
|E|Export|               |
|M|Mute|               |
|P|Pin| Messages only |
|X|Forbidden|               |

### 1.2 Assignments

|Roll/Object | Messages|(Group)-Chat|Group-Users|Groups|Users|Archive|Contacts|
|----|----|----|----|----|----|----|----|
|**User-Client**|C,R|R|R|-|-|X|-|
|**User-Employee**|C,D,R,P (assigned)|R,E*|R,M|-|-|X|R|
|**User-Leg.Guardian**|C,R|R|R|-|-|X|-|
|**Admin-Functional**|X|C,D|C,D,R|C,D,R,E|C,D,R,E|X|C,D,R|
|**User-Supervisor**|C,D,R,P (all)|R,E|R,M|R|R|X|R|
|**root**|X|C,D,R|C,D,R|C,D,R|C,D,R|R,E|C,D,R|

## *\<Konzept 2>*

*\<Erklärung>*

…

## *\<Konzept n>*

*\<Erklärung>*
