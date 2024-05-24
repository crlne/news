<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;

class NewsSeeder extends Seeder
{
    public function run()
    {
        News::create([
            'title' => 'Novas Descobertas na Física',
            'content' => 'Físicos descobriram uma nova partícula subatômica que pode revolucionar nossa compreensão do universo.',
            'image_url' => 'https://tm.ibxk.com.br/2022/12/19/19145133225266.jpg'
        ]);

        News::create([
            'title' => 'Avanços na Medicina',
            'content' => 'Pesquisadores desenvolveram uma nova terapia genética que pode curar doenças hereditárias.',
            'image_url' => 'https://clinicanasnuvens.com.br/blog/wp-content/uploads/2020/12/Robos-cirurgicos-1024x683.jpg'
        ]);

        News::create([
            'title' => 'Tecnologia e Inovação',
            'content' => 'Uma startup lançou um dispositivo inovador que promete aumentar a eficiência energética em 50%.',
            'image_url' => 'https://www.epitech-it.es/wp-content/uploads/2023/02/pexels-photo-2599244.jpeg'
        ]);

        News::create([
            'title' => 'Exploração Espacial',
            'content' => 'A missão a Marte alcançou um marco significativo ao encontrar evidências de água líquida.',
            'image_url' => 'https://www.inovacaotecnologica.com.br/noticias/imagens/010130150914-exomars-2018.jpg'
        ]);

        News::create([
            'title' => 'Mudanças Climáticas',
            'content' => 'Estudos recentes mostram que as mudanças climáticas estão ocorrendo em um ritmo mais rápido do que o previsto.',
            'image_url' => 'https://s2.static.brasilescola.uol.com.br/img/2019/11/urso-polar.jpg'
        ]);

        News::create([
            'title' => 'Biotecnologia',
            'content' => 'Novas técnicas de biotecnologia estão permitindo avanços rápidos na agricultura sustentável.',
            'image_url' => 'https://terramagna.com.br/wp-content/uploads/2022/05/cientista-manipulando-planta-biotecnologia.png'
        ]);

        News::create([
            'title' => 'Inteligência Artificial',
            'content' => 'Pesquisadores de IA desenvolveram um novo algoritmo que melhora a precisão do reconhecimento de voz.',
            'image_url' => 'https://abramed.org.br/wp-content/uploads/2023/05/confiante-jovem-medico-com-uma-prancheta-nas-maos-ao-lado-de-um-monitor-com-um-grafico-cerebral-belo-medico-1.jpg'
        ]);

        News::create([
            'title' => 'Energia Renovável',
            'content' => 'A energia solar está se tornando mais acessível graças a avanços na tecnologia de células fotovoltaicas.',
            'image_url' => 'https://www.eleconomista.com.mx/__export/1566356467273/sites/eleconomista/img/2019/08/20/shutterstock_189644279.jpg_1757708891.jpg'
        ]);

        News::create([
            'title' => 'Saúde Pública',
            'content' => 'Uma nova vacina contra a gripe mostrou-se altamente eficaz em ensaios clínicos recentes.',
            'image_url' => 'data:image/jpeg;base64,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'
        ]);
    }
}
