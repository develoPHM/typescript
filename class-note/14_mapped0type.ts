type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [ K in Heroes]:number }
const ages: HeroAges = {
  Hulk: 10,
  Capt: 5,
  Thor: 7,
}