class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def gerar_impressao_format(format, dados, nome_relatorio, nme_layout = "imprimir", orientation = 'Landscape', footer_left = '', footer_center = "#{RODA_PE_PDF}")
    format.pdf do
      html = render_to_string(:action => "#{nme_layout}.html.erb", :layout => false)
      kit = PDFKit.new(html, :orientation => orientation, :print_media_type => true,
                       margin_top: '0.35in', margin_bottom: '0.35in', margin_left: '0.35in', margin_right: '0.35in',
                       :footer_left => footer_left, :footer_center => footer_center, :footer_font_size => '8')
      kit.stylesheets << "#{Rails.root}/app/javascript/stylesheets/app.scss"
      send_data(kit.to_pdf, :filename => "#{nome_relatorio}.pdf", :type => 'application/pdf')
    end

    if params[:format].to_s == 'XLSX'
      request.format = 'xlsx'
      format.xlsx { send_data render_to_string(:action => "#{nme_layout}.xlsx.axlsx", :type => "application/xlsx", :layout => false), :filename => "#{nome_relatorio}.xlsx" }
    end

    format.xml do
      render xml: dados.collect { |dado| remove_keys(dado.to_hash) }
    end

    format.json do
      render json: dados.collect { |dado| remove_keys(dado.to_hash) }
    end

    format.csv { send_data dados.to_csv, :filename => "#{nome_relatorio}.csv", :type => 'text/csv', :disposition => 'attachment' }
  end
end
