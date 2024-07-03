# A14 React Routing Lab

react-router-dom을 이용해 routing 연습을 하는 코드 챌린지입니다.

## 요구사항

    - Home Page (`/`): Display a list of all authors.

    - About Page (`/about`): Show an about page.

    - Author Detail Page (`/author/:name`): Display a list of the books written by the author.

    - Book Detail Page (`/author/:name/:book`): Display the book detail.

    - Book Chapters Page (`/author/:name/:book/chapters`): Display a list of chapters of the book.

    - Book Characters Page (`/author/:name/:book/characters`): Display a list of characters of the book.

## 고민되는 점?

    - routing을 연습하기 위해 계속해서 <Outlet> 컴포넌트를 불러오는데 뭔가 동일 동작의 반복 같습니다.

## 시도해 본 것

    - 컴포넌트 쪼개기 : 굉장히 단순한 컴포넌트여서 쪼개지 않아도 되지만 연습 삼아 해봤습니다. 그런데 아직 Link로 state를 전달하는 방법이 미숙해서 <LinkListItem>에 state 전달은 실패했습니다.
