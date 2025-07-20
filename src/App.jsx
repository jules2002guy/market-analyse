import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import {
  TrendingUp,
  Users,
  Smartphone,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Target,
  BarChart3,
  Globe,
  Building,
  Zap,
  Leaf,
  Scale
} from 'lucide-react'
import chartImage from './assets/mobile_money_adoption_togo.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const pestelData = {
    politique: {
      icon: <Building className="w-6 h-6" />,
      color: "bg-blue-500",
      items: [
        "Stabilité politique relative favorable aux investissements",
        "Volonté gouvernementale pour l'inclusion financière",
        "Réglementation BCEAO en évolution",
        "Programme Novissi comme exemple d'innovation"
      ]
    },
    economique: {
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-green-500",
      items: [
        "Croissance du PIB de 5,3% en 2024",
        "Faible taux de bancarisation traditionnelle",
        "Importance de l'économie informelle",
        "Inflation maîtrisée mais à surveiller"
      ]
    },
    socioculturel: {
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500",
      items: [
        "Tradition des tontines bien ancrée",
        "Confiance communautaire essentielle",
        "Population jeune ouverte aux technologies",
        "Besoin d'éducation financière"
      ]
    },
    technologique: {
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-orange-500",
      items: [
        "94% des adultes ont un compte mobile money",
        "Accès croissant aux smartphones",
        "Défis d'interopérabilité entre opérateurs",
        "Sécurité des données primordiale"
      ]
    },
    environnemental: {
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-emerald-500",
      items: [
        "Vulnérabilité aux chocs climatiques",
        "Épargne pour la résilience financière",
        "Réduction de l'empreinte carbone",
        "Sensibilisation environnementale"
      ]
    },
    legal: {
      icon: <Scale className="w-6 h-6" />,
      color: "bg-red-500",
      items: [
        "Cadre réglementaire BCEAO pour mobile money",
        "Protection des données personnelles",
        "Statut juridique des tontines numériques",
        "Conformité KYC et LBA/FT"
      ]
    }
  }

  const swotData = {
    forces: {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      color: "border-green-200 bg-green-50",
      items: [
        "Familiarité culturelle avec les tontines",
        "Forte pénétration du mobile money (94%)",
        "Accessibilité et commodité 24/7",
        "Transparence et traçabilité des transactions",
        "Potentiel d'inclusion financière élevé"
      ]
    },
    faiblesses: {
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      color: "border-red-200 bg-red-50",
      items: [
        "Méfiance vis-à-vis du numérique",
        "Fracture numérique zones rurales/urbaines",
        "Éducation financière limitée",
        "Coûts de développement élevés",
        "Dépendance aux opérateurs mobile money"
      ]
    },
    opportunites: {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      color: "border-blue-200 bg-blue-50",
      items: [
        "Croissance de l'inclusion financière",
        "Demande non satisfaite importante",
        "Innovation technologique (IA, blockchain)",
        "Partenariats stratégiques possibles",
        "Expansion régionale potentielle"
      ]
    },
    menaces: {
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      color: "border-orange-200 bg-orange-50",
      items: [
        "Concurrence accrue des fintechs",
        "Risques de sécurité et fraude",
        "Évolution réglementaire imprévisible",
        "Instabilité économique potentielle",
        "Résistance au changement"
      ]
    }
  }

  const keyStats = [
    { label: "Adoption Mobile Money", value: "94%", icon: <Smartphone className="w-5 h-5" /> },
    { label: "Croissance PIB 2024", value: "5.3%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Taux d'inclusion financière", value: "85.7%", icon: <Users className="w-5 h-5" /> },
    { label: "Population (millions)", value: "8.6", icon: <Globe className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Analyse du marché des tontines au Togo
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Étude SWOT & PESTEL - Applications d'épargne mobile money
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-sm">
                <BarChart3 className="w-4 h-4 mr-1" />
                Analyse 2024
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Key Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="pestel">Analyse PESTEL</TabsTrigger>
            <TabsTrigger value="swot">Analyse SWOT</TabsTrigger>
            <TabsTrigger value="conclusions">Conclusions</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Évolution du Mobile Money
                  </CardTitle>
                  <CardDescription>
                    Adoption croissante du mobile money au Togo (2016-2023)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={chartImage} 
                    alt="Évolution adoption mobile money Togo" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Contexte des tontines
                  </CardTitle>
                  <CardDescription>
                    Tradition d'épargne communautaire au Togo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">
                        Les tontines représentent 70-75 milliards FCFA dans l'économie togolaise
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">
                        Pratique culturelle bien ancrée, particulièrement chez les femmes
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">
                        Besoin de digitalisation pour plus de sécurité et transparence
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cadre d'analyse choisi</CardTitle>
                <CardDescription>
                  Combinaison SWOT et PESTEL pour une analyse complète
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Analyse PESTEL</h4>
                    <p className="text-sm text-gray-600">
                      Évalue les macro-facteurs environnementaux : Politique, Économique, 
                      Socioculturel, Technologique, Environnemental, et Légal.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Analyse SWOT</h4>
                    <p className="text-sm text-gray-600">
                      Examine les facteurs internes (Forces, Faiblesses) et externes 
                      (Opportunités, Menaces) spécifiques au projet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PESTEL Tab */}
          <TabsContent value="pestel" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(pestelData).map(([key, data]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center capitalize">
                      <div className={`p-2 rounded-lg ${data.color} text-white mr-3`}>
                        {data.icon}
                      </div>
                      {key}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* SWOT Tab */}
          <TabsContent value="swot" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(swotData).map(([key, data]) => (
                <Card key={key} className={`${data.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <CardTitle className="flex items-center capitalize">
                      {data.icon}
                      <span className="ml-2">{key}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {data.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Conclusions Tab */}
          <TabsContent value="conclusions" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Recommandations stratégiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Capitaliser sur l'existant</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Exploiter la forte adoption du mobile money et la tradition des tontines
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Partenariats stratégiques</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Collaborer avec les opérateurs mobile money et institutions financières
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-sm">Éducation financière</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Investir dans la formation des utilisateurs pour faciliter l'adoption
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Shield className="w-5 h-5 mr-2" />
                    Facteurs de succès clés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <span className="text-sm">Sécurité et confiance des utilisateurs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">2</span>
                      </div>
                      <span className="text-sm">Interface simple et intuitive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">3</span>
                      </div>
                      <span className="text-sm">Interopérabilité avec tous les opérateurs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-sm">4</span>
                      </div>
                      <span className="text-sm">Conformité réglementaire stricte</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Potentiel de marché</CardTitle>
                <CardDescription>
                  Évaluation du potentiel commercial des applications de tontines au Togo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Élevé</div>
                    <div className="text-sm text-gray-600 mt-1">Potentiel de marché</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">Moyen</div>
                    <div className="text-sm text-gray-600 mt-1">Barrières à l'entrée</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Fort</div>
                    <div className="text-sm text-gray-600 mt-1">Impact social attendu</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Analyse réalisée en 2024 - Données basées sur les sources officielles et études de marché
            </p>
          </div>

          
          

          {/* Conteneur pour les badges */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            
            {/* Badge 1 (taille réduite) */}
            <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              BCEAO
            </span>

            {/* Badge 2 (taille réduite) */}
            <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              Banque Mondiale
            </span>

            {/* Badge 3 (taille réduite) */}
            <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              ARCEP Togo
            </span>

            {/* Badge 4 (taille réduite) */}
            <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              FNFI
            </span>

          </div>
        


        </div>
      </footer>
    </div>
  )
}

export default App