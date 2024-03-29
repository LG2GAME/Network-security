let quizBase = [
    {
        id: 0,
        question: "Co to jest RODO?",
        correctAnswer: "Rozporządzenie Ogólne o Ochronie Danych Osobowych.",
        answerA: "Regulamin Ochrony Danych Online.",
        answerB: "Rozporządzenie Ogólne o Ochronie Danych Osobowych.",
        answerC: "Rada Ochrony Danych Online.",
        answerD: "Regulamin Ochrony Danych Osobistych.",
        punkty: 10,
    },
    {
        id: 1,
        question: "Dlaczego warto korzystać z silnych haseł?",
        correctAnswer: "Aby utrudnić dostęp nieautoryzowanym osobom.",
        answerA: "Żeby można było je łatwo zapamiętać.",
        answerB: "Bo tak jest zawsze.",
        answerC: "Bez powodu.",
        answerD: "Aby utrudnić dostęp nieautoryzowanym osobom.",
        punkty: 10,
    },
    {
        id: 2,
        question: "Co to jest phishing?",
        correctAnswer: "Próba wyłudzenia poufnych informacji przez podszywanie się.",
        answerA: "Atak na konto bankowe",
        answerB: "Wycieki hasła lub innych danych",
        answerC: "Rodzaj rybołówstwa.",
        answerD: "Próba wyłudzenia poufnych informacji przez podszywanie się.",
        punkty: 10,
    },
    {
        id: 3,
        question: "Kiedy powinno się zmieniać hasła?",
        correctAnswer: "Regularnie, aby zwiększyć bezpieczeństwo konta.",
        answerA: "Tylko wtedy, gdy się zapomni hasła.",
        answerB: "Regularnie, aby zwiększyć bezpieczeństwo konta.",
        answerC: "Regularnie co pół roku.",
        answerD: "Nie trzeba zmieniać hasła.",
        punkty: 10,
    },
    {
        id: 4,
        question: "Co oznacza dwuetapowe uwierzytelnianie (2FA)?",
        correctAnswer: "Dodatkowa warstwa zabezpieczeń, oprócz hasła, np. kod SMS",
        answerA: "Podwójne hasło",
        answerB: "Hasło złożone z dwóch wyrazów",
        answerC: "Hasło i login",
        answerD: "Dodatkowa warstwa zabezpieczeń, oprócz hasła, np. kod SMS",
        punkty: 10,
    },
    {
        id: 5,
        question: "Czy zawsze warto udostępniać swoje dane osobowe online?",
        correctAnswer: "Nie, chyba że jest to konieczne.",
        answerA: "Nie, chyba że jest to konieczne.",
        answerB: "Tak, zawsze.",
        answerC: "Nie, nigdy.",
        answerD: "Tylko kiedy nas o to poproszą.",
        punkty: 10,
    },
    {
        id: 6,
        question: "Co zrobić, gdy otrzymasz podejrzane wiadomości e-mail?",
        correctAnswer: "Zignorować i nie klikać w żadne linki ani załączniki.",
        answerA: "Otworzyć załącznik, żeby zobaczyć, co jest w środku.",
        answerB: "Odpowiedzieć na e-maila i spytać, o co chodzi.",
        answerC: "Zignorować i nie klikać w żadne linki ani załączniki.",
        answerD: "Podzielić się treścią e-maila z przyjaciółmi.",
        punkty: 10,
    },
    {
        id: 7,
        question: "Co oznacza termin 'bezpieczne połączenie' (SSL)?",
        correctAnswer: "Szyfrowane połączenie między twoim komputerem a stroną internetową.",
        answerA: "Specjalny rodzaj telefonu.",
        answerB: "Specjalny rodzaj hasła.",
        answerC: "Szyfrowane połączenie między twoim komputerem a stroną internetową.",
        answerD: "Nazwa firmy tworzącej zabezpieczenia.",
        punkty: 10,
    },
    {
        id: 8,
        question: "Czy dostarczanie informacji o swojej lokalizacji na życzenie wszystkich aplikacji jest bezpieczne?",
        correctAnswer: "Nie, lepiej tego nie robić.",
        answerA: "Tak, zawsze.",
        answerB: "Tylko, jeśli jesteś z rodzicami.",
        answerC: "Zależy od tego, jakiej aplikacji używasz.",
        answerD: "Nie, lepiej tego nie robić.",
        punkty: 10,
    },
    {
        id: 9,
        question: "Czy korzystanie z publicznych sieci Wi-Fi zawsze jest bezpieczne?",
        correctAnswer: "Nie, niektóre sieci mogą być niezabezpieczone.",
        answerA: "Nie, niektóre sieci mogą być niezabezpieczone.",
        answerB: "Tylko wtedy, gdy korzystasz z VPN.",
        answerC: "Tylko w domu.",
        answerD: "Tak, zawsze.",
        punkty: 10,
    },
    {
        id: 10,
        question: "Czy podawanie swojego imienia i nazwiska w grach online jest bezpieczne?",
        correctAnswer: "Nie, lepiej używać pseudonimu.",
        answerA: "Tak, zawsze.",
        answerB: "Tylko, jeśli grasz ze znajomymi.",
        answerC: "Nie, lepiej używać pseudonimu.",
        answerD: "Zależy od gry",
        punkty: 10,
    },
    {
        id: 11,
        question: "Dlaczego ważne jest zabezpieczanie swojego smartfona hasłem lub PIN-em?",
        correctAnswer: "Aby chronić dane przechowywane na urządzeniu.",
        answerA: "Bo to obowiązkowe.",
        answerB: "Żeby się pochwalić przed znajomymi.",
        answerC: "Bo tak zawsze robiłem/am",
        answerD: "Aby chronić dane przechowywane na urządzeniu.",
        punkty: 10,
    },
    {
        id: 12,
        question: "Jakie są przykłady danych osobowych?",
        correctAnswer: "Imię i nazwisko, adres IP.",
        answerA: "Imię i nazwisko, adres IP.",
        answerB: "Imię i nazwisko, numer kierunkowy telefonu.",
        answerC: "Imię, marka samochodu.",
        answerD: "Nazwisko, ulubiona gra",
        punkty: 10,
    },
]