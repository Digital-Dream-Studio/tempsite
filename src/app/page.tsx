// pages/index.js
"use client";
import Head from 'next/head'
import { useState } from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log({ name, email, message })
    alert('Сообщение отправлено!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Studio Name - Creative Design Studio</title>
        <meta name="description" content="Профессиональная дизайн-студия" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Главный блок */}
      <header className="relative bg-black text-white h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-blue-950 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Studio Name</h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl">Создаем уникальные дизайн-решения, которые привлекают внимание и вдохновляют</p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">Связаться с нами</a>
            </Button>
          </div>
        </div>
      </header>

      {/* О нас блок */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">О нас</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Card>
                <CardContent className="p-0">
                  <img src="/api/placeholder/600/400" alt="Наша команда" className="rounded-lg w-full" />
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Креативная студия с большим опытом</h3>
              <p className="text-muted-foreground mb-6">
                Мы - команда профессиональных дизайнеров, разработчиков и стратегов, которые объединились, чтобы создавать выдающиеся проекты. С момента основания в 2018 году, мы успешно завершили более 200 проектов для клиентов со всего мира.
              </p>
              <p className="text-muted-foreground mb-6">
                Наша миссия - помогать брендам выделяться на рынке через уникальный дизайн и инновационные решения. Мы верим, что каждый проект уникален и заслуживает индивидуального подхода.
              </p>
              <p className="text-muted-foreground">
                В основе нашей работы лежат три принципа: креативность, функциональность и внимание к деталям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Наши работы блок */}
      <section id="works" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Наши работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={`/api/placeholder/400/300`} alt={`Проект ${item}`} className="w-full h-64 object-cover" />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Проект {item}</h3>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">Веб-дизайн</Badge>
                    <Badge variant="outline">Разработка</Badge>
                    <Badge variant="outline">Брендинг</Badge>
                  </div>
                  <Button variant="link" className="px-0">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Смотреть все работы</Button>
          </div>
        </div>
      </section>

      {/* Наши услуги блок */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Наши услуги</h2>
          <Tabs defaultValue="web" className="mb-10">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="web">Веб</TabsTrigger>
                <TabsTrigger value="design">Дизайн</TabsTrigger>
                <TabsTrigger value="marketing">Маркетинг</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="web" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Веб-дизайн</CardTitle>
                  <CardDescription>Привлекательные и функциональные сайты</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Создаем современные и удобные веб-сайты, которые помогают вашему бизнесу расти и привлекать новых клиентов.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Разработка</CardTitle>
                  <CardDescription>Реализация вашего проекта</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Превращаем дизайн в функциональные веб-приложения с использованием современных технологий, включая Next.js и React.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="design" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Брендинг</CardTitle>
                  <CardDescription>Уникальная визуальная идентичность</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Разрабатываем уникальную визуальную идентичность, которая выделяет ваш бренд среди конкурентов.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>UX/UI Дизайн</CardTitle>
                  <CardDescription>Интуитивно понятные интерфейсы</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Создаем интуитивно понятные и привлекательные интерфейсы, которые улучшают пользовательский опыт.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="marketing" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>SEO-оптимизация</CardTitle>
                  <CardDescription>Улучшаем видимость в поисковых системах</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Помогаем вашему сайту занимать высокие позиции в поисковых системах и привлекать больше органического трафика.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Консультации</CardTitle>
                  <CardDescription>Профессиональная поддержка</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Предоставляем профессиональные консультации по вопросам дизайна, разработки и маркетинга.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Отзывы блок */}
      <section id="testimonials" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Александр Петров', company: 'TechCorp', text: 'Работа со Studio Name была настоящим удовольствием. Наш новый сайт превзошел все ожидания и уже приносит отличные результаты.' },
              { name: 'Елена Смирнова', company: 'Fashion Brand', text: 'Команда студии проявила глубокое понимание нашего бренда и создала дизайн, который идеально отражает нашу философию. Очень рекомендую!' },
              { name: 'Михаил Иванов', company: 'StartUp Inc', text: 'Благодаря профессионализму команды Studio Name, наш проект был запущен вовремя и в рамках бюджета. Обязательно будем сотрудничать снова.' }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="pt-6">
                  <p className="mb-6 italic">"{testimonial.text}"</p>
                  <Separator className="my-4 opacity-20" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-primary-foreground/70">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Связаться блок */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Связаться с нами</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>Отправьте нам сообщение</CardTitle>
                  <CardDescription>Мы ответим вам в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>Свяжитесь с нами напрямую</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="flex items-start">
                      <span className="mr-3">📍</span>
                      <span>г. Москва, ул. Примерная, д. 123</span>
                    </p>
                    <p className="flex items-start">
                      <span className="mr-3">📞</span>
                      <span>+7 (999) 123-45-67</span>
                    </p>
                    <p className="flex items-start">
                      <span className="mr-3">✉️</span>
                      <span>info@studioname.ru</span>
                    </p>
                    <p className="flex items-start">
                      <span className="mr-3">⏰</span>
                      <span>Пн-Пт: 10:00 - 19:00</span>
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-4">Мы в социальных сетях:</h4>
                    <div className="flex space-x-4">
                      <Button variant="link" className="px-0">Instagram</Button>
                      <Button variant="link" className="px-0">Facebook</Button>
                      <Button variant="link" className="px-0">VK</Button>
                      <Button variant="link" className="px-0">Telegram</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Studio Name</h3>
              <p className="text-muted-foreground mt-2">© 2025 Studio Name. Все права защищены.</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">Instagram</Button>
              <Button variant="ghost" size="sm">Facebook</Button>
              <Button variant="ghost" size="sm">VK</Button>
              <Button variant="ghost" size="sm">Telegram</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}