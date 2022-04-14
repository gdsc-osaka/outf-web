export default {
  data: () => ({
    events: [
      {
        color: 'cyan',
        month: '16:10',
        title: '授業終了、移動開始',
        text: '再履バス(学内連絡バス)を使って吹田キャンパスへ移動。コンベンションセンター前で下車し、いざすいらんへ',
        img: require('@/assets/activity/sairibus.jpg'),
      },
      {
        color: 'green',
        month: '17:00',
        title: '練習開始',
        text: '基本的に平日は17:00、土曜日は9:00に練習が開始されます。平日に豊中キャンパスで4限目、5限目を受講した後、遅れて参加する部員もいますので安心してください！',
        img: require('@/assets/activity/suiran.jpg'),
      },
      {
        color: 'pink',
        month: '19:00 ~ 20:00',
        title: '練習終了',
        text: '部員とお喋りを楽しみながら、再履バスで豊中キャンパスへ。練習は19:00~20:00の間に終わりますがグランドは21:00まで利用可能です',
      },
      // {
      //   color: 'amber',
      //   month: '12月',
      //   title: '新歓',
      //   text: '(新歓情報) - naweo;enia v vae;wo va;;ie  vn;ena  vn;awien  va;wriov naweo;enia v vae;wo va;;ie  vn;ena  vn;awien  va;wriov',
      // },
    ],
  }),
}
