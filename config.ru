require 'sinatra'
require 'chronic'

class Chronular < Sinatra::Base
  get '/' do
    erb :index, :locals => {:time => '', :result => 'Enter a time expression above'}
  end

  [:get, :post].each do |method|
    send(method, '/chronic/do_test') do
      result = Chronic.parse(params[:time])
      context = {:time => params[:time]}

      if result
        context[:result] = result
      else
        context[:errors] = "unable to parse your expression, try again"
      end

      erb :index, :locals => context
    end
  end

end

run Chronular.new
